import { NgModule } from '@angular/core';
import { BrowserModule, Title } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import {
  TranslateLoader,
  TranslateModule,
  TranslateService,
} from '@ngx-translate/core';
import { TitleStrategy } from '@angular/router';
import { NgxsModule } from '@ngxs/store';
import { environment } from '../environments/environment';
import { NgxsLoggerPluginModule } from '@ngxs/logger-plugin';
import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  APP_DEFAULTS,
  AppState,
  I18nService,
  ItemsState,
  TitleStrategyService,
  TranslateLoaderService,
} from './core';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    TranslateModule.forRoot({
      defaultLanguage: APP_DEFAULTS.lang,
      useDefaultLang: true,
      loader: {
        provide: TranslateLoader,
        useClass: TranslateLoaderService,
        deps: [I18nService],
      },
    }),
    NgxsModule.forRoot([AppState, ItemsState], {
      developmentMode: !environment.production,
    }),
    NgxsLoggerPluginModule.forRoot(),
    NgxsReduxDevtoolsPluginModule.forRoot(),
    AppRoutingModule,
  ],
  providers: [
    {
      provide: TitleStrategy,
      useClass: TitleStrategyService,
      deps: [Title, TranslateService],
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
