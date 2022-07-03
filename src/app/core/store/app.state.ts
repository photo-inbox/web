import { Action, NgxsOnInit, Selector, State, StateContext } from '@ngxs/store';
import { Injectable } from '@angular/core';
import { AppStateModel, NavigationItem } from './app.models';
import { APP_DEFAULTS } from './app.defaults';
import { ItemsState } from './items';
import { I18nDto } from '@photo-inbox/dtos';
import { SetI18n } from './app.actions';
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
export class AppState implements NgxsOnInit {
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

  ngxsOnInit(ctx?: StateContext<AppStateModel>): any {
    ctx?.dispatch(new SetI18n());
  }

  @Action(SetI18n)
  setI18n(ctx: StateContext<AppStateModel>): Observable<any> {
    return of(ctx.getState()).pipe(
      map(({ lang }) => lang),
      switchMap((lang) => this.i18nService.getI18nByLang(lang)),
      tap(({ lang }) => this.translate.use(lang)),
      tap((i18n) => ctx.patchState({ i18n })),
      tap(({ lang, document }) =>
        this.translate.setTranslation(lang, document),
      ),
    );
  }
}
