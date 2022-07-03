import { Component, HostListener, Input } from '@angular/core';
import { ItemDto } from '@photo-inbox/dtos';
import { MatDialog } from '@angular/material/dialog';
import {
  ItemsDetailsComponentData,
  ItemsListDetailsComponent,
} from '../items-list-details/items-list-details.component';

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
    this.matDialog.open<ItemsListDetailsComponent, ItemsDetailsComponentData>(
      ItemsListDetailsComponent,
      {
        data: { item: this.item },
      },
    );
  }
}
