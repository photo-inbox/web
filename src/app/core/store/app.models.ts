export interface AppStateModel {
  lang: string;
  navigationItems: NavigationItem[];
}

export interface NavigationItem {
  title: string;
  route: string;
}
