export type MskLayoutDirection = 'ltr' | 'rtl';
export type MskLayoutScheme = 'auto' | 'dark' | 'light';
export type MskLayoutScreens = { [key: string]: string };
export type MskLayoutTheme = 'theme-default' | string;
export type MskLayoutThemes = { id: string; name: string }[];
export type MskLayoutType =
  | 'empty'
  // Horizontal
  | 'centered'
  | 'enterprise'
  | 'material'
  | 'modern'
  // Vertical
  | 'classic'
  | 'classy'
  | 'compact'
  | 'dense'
  | 'futuristic'
  | 'thin';
