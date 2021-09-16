import {
  LayoutDirection,
  LayoutScheme,
  LayoutTheme,
  LayoutType,
} from './app-layout.types';

/**
 * LayoutConfig interface. Update this interface to strictly type your config
 * object.
 */
export interface LayoutConfig {
  direction: LayoutDirection;
  scheme: LayoutScheme;
  theme: LayoutTheme;
  type: LayoutType;
}

/**
 * Default configuration for the entire application. This object is used by
 * MskConfigService to set the default configuration.
 *
 * If you need to store global configuration for your app, you can use this
 * object to set the defaults. To access, update and reset the config, use
 * MskConfigService and its methods.
 */
export const layoutConfig: LayoutConfig = {
  direction: 'ltr',
  scheme: 'light',
  theme: 'default',
  type: 'classic',
};
