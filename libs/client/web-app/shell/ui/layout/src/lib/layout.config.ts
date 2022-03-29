import { MskLayoutScreens, MskLayoutThemes } from '..';
import {
  MskLayoutDirection,
  MskLayoutScheme,
  MskLayoutTheme,
  MskLayoutType,
} from './app-layout.types';

/**
 * LayoutConfig interface. Update this interface to strictly type your config
 * object.
 */
export interface MskLayoutConfig {
  language: string;
  direction: MskLayoutDirection;
  screens: MskLayoutScreens;
  scheme: MskLayoutScheme;
  themes: MskLayoutThemes;
  theme: MskLayoutTheme;
  type: MskLayoutType;
}

/**
 * Default configuration for the entire application. This object is used by
 * MskConfigService to set the default configuration.
 *
 * If you need to store global configuration for your app, you can use this
 * object to set the defaults. To access, update and reset the config, use
 * MskConfigService and its methods.
 */
export const layoutConfig: MskLayoutConfig = {
  language: 'en',
  direction: 'ltr',
  type: 'classic',
  scheme: 'light',
  screens: {
    sm: '600px',
    md: '960px',
    lg: '1280px',
    xl: '1440px',
  },
  theme: 'theme-default',
  themes: [
    {
      id: 'theme-default',
      name: 'Default',
    },
    {
      id: 'theme-teal',
      name: 'Teal',
    },
    {
      id: 'theme-purple',
      name: 'Purple',
    },
    {
      id: 'theme-amber',
      name: 'Amber',
    },
  ],
};
