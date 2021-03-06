import { Selector, State } from '@ngxs/store';
import { Injectable } from '@angular/core';
import { AppStateModel, NavigationItem } from './app.models';
import { APP_DEFAULTS } from './app.defaults';
import { ItemsState } from './items';
import { TranslateService } from '@ngx-translate/core';

@State<AppStateModel>({
  name: 'app',
  defaults: APP_DEFAULTS,
  children: [ItemsState],
})
@Injectable()
export class AppState {
  @Selector()
  static navigationItems(state: AppStateModel): NavigationItem[] {
    return state.navigationItems;
  }

  constructor(private readonly translate: TranslateService) {}
}
