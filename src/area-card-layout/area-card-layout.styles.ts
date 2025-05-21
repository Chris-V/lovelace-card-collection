import { css } from "lit";

export default css`
ha-card {
  position: relative;

  overflow: hidden;
  height: 100%;

  border: none;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  --area-accent-color: #333333;
  --header-footer-height: 42px;

  --primary-text-color: #DADADB;
  --secondary-text-color: #BDBDBD;
  --paper-item-icon-color: var(--primary-text-color);
  --mdc-theme-primary: var(--primary-text-color);

  --state-icon-color: var(--primary-text-color);
  --state-inactive-color: var(--primary-text-color);
}

.root {
  position: absolute;
  inset: 0;

  display: flex;
  align-items: stretch;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: space-between;
  overflow: hidden;

  color: var(--primary-text-color);

  --ha-card-background: rgba(0, 0, 0, 0);
  --ha-card-border-radius: 0;
  --ha-card-box-shadow: none;
}

.section {
  position: relative;

  box-sizing: border-box;
  padding: 5px;
  border: 0;
}

.header, .footer {
  height: var(--header-footer-height);

  --icon-size: calc(var(--header-footer-height) - 10px);
}

.header {
  order: 1;

  display: flex;
  align-items: center;
  padding: 5px;

  background-color: color-mix(in srgb, var(--area-accent-color) 90%, transparent);
}

.header .title {
  font-size: 1.6em;
  font-weight: 500;
}

.header .title state-badge {
  cursor: pointer;
  height: var(--icon-size, 24px);
  line-height: var(--icon-size, 24px);
  vertical-align: baseline;
}

.header .badges {
  height: 100%;
  flex-grow: 1;

  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 0.5em;
}

.footer {
  order: 3;

  display: flex;
  align-items: baseline;
  justify-content: center;
  gap: 0.5em;

  background-color: rgba(0, 0, 0, 0.6);
}

.panels {
  order: 2;
  flex-grow: 1;
  flex-shrink: 1;

  display: flex;
  overflow: auto hidden;
  padding: 0;

  scroll-behavior: smooth;
  scroll-snap-type: x mandatory;
}

.panels > ::slotted(*), .panels > .empty-panel {
  position: relative;
  height: 100%;
  width: 100%;
  flex-shrink: 0;

  display: block;
  box-sizing: border-box;
  padding: 5px;

  background-color: rgba(0, 0, 0, 0.55);

  scroll-snap-align: start;
}

.panels > .empty-panel {
  background: none;
}

::-webkit-scrollbar {
  width: 3px;
  height: 3px;
}

::-webkit-scrollbar-track {
  background: rgba(0, 0, 0, 0.55);
}

::-webkit-scrollbar-thumb {
  background-color: color-mix(in srgb, var(--area-accent-color) 55%, transparent);
}

::-webkit-scrollbar-thumb:hover {
  background: var(--area-accent-color);
}
`;
