import { IsActiveMatchOptions } from '@angular/router';

export interface NavigationItem {
  id?: string;
  title?: string;
  subtitle?: string;
  type: 'aside' | 'basic' | 'collapsable' | 'divider' | 'group' | 'spacer';
  hidden?: (item: NavigationItem) => boolean;
  active?: boolean;
  disabled?: boolean;
  tooltip?: string;
  link?: string;
  externalLink?: boolean;
  target?: '_blank' | '_self' | '_parent' | '_top' | string;
  exactMatch?: boolean;
  isActiveMatchOptions?: IsActiveMatchOptions;
  function?: (item: NavigationItem) => void;
  classes?: {
    title?: string;
    subtitle?: string;
    icon?: string;
    wrapper?: string;
  };
  icon?: string;
  badge?: {
    title?: string;
    classes?: string;
  };
  children?: NavigationItem[];
  meta?: any;
}

export type VerticalNavigationAppearance =
  | 'default'
  | 'compact'
  | 'dense'
  | 'thin';

export type VerticalNavigationMode = 'over' | 'side';

export type VerticalNavigationPosition = 'left' | 'right';
