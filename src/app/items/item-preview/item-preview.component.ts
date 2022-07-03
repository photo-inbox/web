import { Component, Input } from '@angular/core';
import { ItemDto } from '@photo-inbox/dtos';

@Component({
  selector: 'app-item-preview',
  templateUrl: './item-preview.component.html',
  styleUrls: ['./item-preview.component.scss'],
})
export class ItemPreviewComponent {
  @Input() item!: ItemDto;
}
