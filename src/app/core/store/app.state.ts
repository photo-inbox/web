import { Action, Selector, State, StateContext } from '@ngxs/store';
import { Injectable } from '@angular/core';
import { AppStateModel, NavigationItem } from './app.models';
import { APP_DEFAULTS } from './app.defaults';
import { ItemsState } from './items';
import { I18nDto } from '@photo-inbox/dtos';
import { SetAppI18n } from './app.actions';
import { Observable, of, switchMap, tap } from 'rxjs';
import { TranslateService } from '@ngx-translate/core';
import { map } from 'rxjs/operators';
import { I18nService } from './i18n';

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

  @Selector()
  static i18n(state: AppStateModel): I18nDto {
    return state.i18n;
  }

  constructor(
    private readonly i18nService: I18nService,
    private readonly translate: TranslateService,
  ) {}

  @Action(SetAppI18n)
  setAppI18n(ctx: StateContext<AppStateModel>): Observable<any> {
    return of(ctx.getState()).pipe(
      map(({ lang }) => lang),
      switchMap((lang) => this.i18nService.getI18nByLang(lang)),
      tap((i18n) => ctx.patchState({ i18n })),
      tap(({ lang, document }) => {
        this.translate.setTranslation(lang, document);
        this.translate.use(lang);
      }),
    );
  }
}
