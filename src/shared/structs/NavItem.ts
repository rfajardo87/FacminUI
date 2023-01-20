import type { Colors } from '../enums/colors';

export interface NavItem {
  link: string;
  icon: string;
  color?: Colors;
  order?: number;
  title?: string;
  text?: string;
}
