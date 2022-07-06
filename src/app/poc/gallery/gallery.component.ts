import { Component, OnDestroy, OnInit } from '@angular/core';
import { PocService } from '../poc.service';
import { Subscription } from 'dexie';
import { ItemModel } from '../poc.models';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss'],
})
export class GalleryComponent implements OnInit, OnDestroy {
  items: ItemModel[] = [];

  private sub$!: Subscription;

  constructor(private readonly service: PocService) {}

  ngOnInit(): void {
    this.sub$ = this.service
      .getAllItems()
      .subscribe((items) => (this.items = items));
  }

  ngOnDestroy(): void {
    this.sub$.unsubscribe();
  }

  async toggleComplete(id: number) {
    await this.service.toggleItemIsCompleted(id);
  }

  async clearCompleted() {
    await this.service.clearCompletedItems();
  }
}
