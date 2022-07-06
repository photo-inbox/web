import { NgModule } from '@angular/core';
import { BrowserModule, Title } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
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
  ItemsState,
  TitleStrategyService,
} from './core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { MatSnackBarModule } from '@angular/material/snack-bar';

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
        useClass: TranslateHttpLoader,
        deps: [HttpClient],
      },
    }),
    NgxsModule.forRoot([AppState, ItemsState], {
      developmentMode: !environment.production,
    }),
    NgxsLoggerPluginModule.forRoot({
      disabled: environment.production,
    }),
    NgxsReduxDevtoolsPluginModule.forRoot({
      disabled: environment.production,
    }),
    AppRoutingModule,
    MatSnackBarModule,
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
