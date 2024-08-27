import { html, LitElement, nothing } from 'lit';
import { customElement, property, state } from 'lit/decorators';
import { EntityStateIconConfig } from '../area-card-layout';
import { HomeAssistant, LovelaceCard, LovelaceCardConfig } from '../types';
import styles from './terrarium-card.styles';

export interface TerrariumControlConfig extends EntityStateIconConfig {
  footer?: boolean;
  energy_entity?: string;
  power_entity?: string;
}

export interface TerrariumCardConfig extends LovelaceCardConfig {
  area: string;
  color?: string;
  controls?: TerrariumControlConfig[];
}

@customElement('terrarium-card')
export class TerrariumCard extends LitElement implements LovelaceCard<TerrariumCardConfig> {
  @property({ attribute: false }) hass!: HomeAssistant

  @state() private config!: TerrariumCardConfig;

  static styles = styles;

  setConfig(config: TerrariumCardConfig): void {
    if (!config.area) {
      throw new Error('Area required');
    }

    this.config = config;
  }

  getCardSize(): number {
    return 6;
  }

  protected render() {
    if (!this.config || !this.hass) {
      return nothing;
    }

    const controls = this.config.controls || [];
    const footer = controls.filter((control) => control.footer);

    return html`
      <area-card-layout
        .hass=${this.hass}
        .areaId=${this.config.area}
        .color=${this.config.color}
        .header=${false}
      >
        ${footer.map((control) => html`
          <entity-state-icon
            slot="controls"
            .hass=${this.hass}
            .entity=${control.entity}
            .icon=${control.icon}
            .tag=${control.tag}
            .name=${control.name}
            .tap=${control.tap_action}
            .hold=${control.hold_action}
          ></entity-state-icon>
        `)}

        <div class="controls count5">
          ${controls.map((control) => html`
            <entity-state-icon
              .hass=${this.hass}
              .entity=${control.entity}
              .icon=${control.icon}
              .tag=${control.tag}
              .name=${control.name}
              .tap=${control.tap_action}
              .hold=${control.hold_action}
            ></entity-state-icon>
          `)}
        </div>

        <div class="settings">
        </div>
      </area-card-layout>
    `;
  }
}
