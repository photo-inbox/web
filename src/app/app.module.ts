import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule, Title } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { TitleStrategy } from '@angular/router';
import { NgxsModule } from '@ngxs/store';
import { environment } from '../environments/environment';
import { NgxsLoggerPluginModule } from '@ngxs/logger-plugin';
import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  AppInitializerService,
  AppState,
  ItemsState,
  TitleStrategyService,
} from './core';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    TranslateModule.forRoot(),
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
  ],
  providers: [
    {
      provide: TitleStrategy,
      useClass: TitleStrategyService,
      deps: [Title, TranslateService],
    },
    {
      provide: APP_INITIALIZER,
      useFactory: (appInitializer: AppInitializerService) =>
        appInitializer.init(),
      deps: [AppInitializerService],
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
