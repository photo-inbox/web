import { Component, HostListener, Input } from '@angular/core';
import { ItemDto } from '@photo-inbox/dtos';
import { MatDialog } from '@angular/material/dialog';
import {
  ItemsDetailsComponent,
  ItemsDetailsComponentData,
} from '../../items-details/items-details.component';

@Component({
  selector: 'app-items-list-preview',
  templateUrl: './items-list-preview.component.html',
  styleUrls: ['./items-list-preview.component.scss'],
})
export class ItemsListPreviewComponent {
  @Input() item!: ItemDto;

  constructor(private readonly matDialog: MatDialog) {}

  @HostListener('click')
  onClick() {
    this.matDialog.open<ItemsDetailsComponent, ItemsDetailsComponentData>(
      ItemsDetailsComponent,
      {
        data: { id: this.item.id },
      },
    );
  }
}
