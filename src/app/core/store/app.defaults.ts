import { AppStateModel } from './app.models';
import { AppRoute } from '../../app.route';

export const APP_DEFAULTS: AppStateModel = {
  lang: 'en',
  navigationItems: [{ title: 'navigation.items', route: `/${AppRoute.items}` }],
};
