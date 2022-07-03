import { I18nDto } from '@photo-inbox/dtos';

export interface AppStateModel {
  lang: string;
  navigationItems: NavigationItem[];
  i18n: I18nDto;
}

export interface NavigationItem {
  title: string;
  route: string;
}
