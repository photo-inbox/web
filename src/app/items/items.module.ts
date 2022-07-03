import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemsRoutingModule } from './items-routing.module';
import { ItemsComponent } from './items.component';
import { ItemPreviewComponent } from './item-preview/item-preview.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { TranslateModule } from '@ngx-translate/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { ItemDialogComponent } from './item-dialog/item-dialog.component';
import { DefaultLayoutModule } from '../shared';

@NgModule({
  declarations: [ItemsComponent, ItemPreviewComponent, ItemDialogComponent],
  imports: [
    CommonModule,
    ItemsRoutingModule,
    DefaultLayoutModule.forFeature(ItemDialogComponent),
    MatToolbarModule,
    TranslateModule,
    MatButtonModule,
    MatIconModule,
  ],
})
export class ItemsModule {}
