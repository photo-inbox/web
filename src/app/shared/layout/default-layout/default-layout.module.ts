import { ModuleWithProviders, NgModule } from '@angular/core';
import {
  DEFAULT_LAYOUT_FAB_COMPONENT,
  DefaultLayoutComponent,
} from './default-layout.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { ComponentType } from '@angular/cdk/portal';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  declarations: [DefaultLayoutComponent],
  imports: [
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    RouterModule,
    CommonModule,
    TranslateModule,
    MatDialogModule,
  ],
  exports: [DefaultLayoutComponent],
})
export class DefaultLayoutModule {
  static forFeature(
    fabComponent: ComponentType<any>,
  ): ModuleWithProviders<DefaultLayoutModule> {
    return {
      ngModule: DefaultLayoutModule,
      providers: [
        { provide: DEFAULT_LAYOUT_FAB_COMPONENT, useValue: fabComponent },
      ],
    };
  }
}
