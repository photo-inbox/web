import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemsRoutingModule } from './items-routing.module';
import { ItemsComponent } from './items.component';
import { ItemsListPreviewComponent } from './items-list/items-list-preview/items-list-preview.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { TranslateModule } from '@ngx-translate/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { ItemsListDetailsComponent } from './items-list/items-list-details/items-list-details.component';
import { DefaultLayoutModule } from '../shared';
import { ItemsNewComponent } from './items-new/items-new.component';
import { ItemsListComponent } from './items-list/items-list.component';

@NgModule({
  declarations: [
    ItemsComponent,
    ItemsListPreviewComponent,
    ItemsListDetailsComponent,
    ItemsNewComponent,
    ItemsListComponent,
  ],
  imports: [
    CommonModule,
    ItemsRoutingModule,
    DefaultLayoutModule.forFeature(ItemsNewComponent),
    MatToolbarModule,
    TranslateModule,
    MatButtonModule,
    MatIconModule,
  ],
})
export class ItemsModule {}
