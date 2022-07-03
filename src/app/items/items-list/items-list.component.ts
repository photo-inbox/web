import { Component, OnInit } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { GetItems, ItemsState } from '../../core';
import { Observable } from 'rxjs';
import { ItemDto } from '@photo-inbox/dtos';

@Component({
  selector: 'app-items-list',
  templateUrl: './items-list.component.html',
  styleUrls: ['./items-list.component.scss'],
})
export class ItemsListComponent implements OnInit {
  @Select(ItemsState.items) readonly items$!: Observable<ItemDto[]>;

  constructor(private readonly store: Store) {}

  ngOnInit(): void {
    this.store.dispatch(new GetItems());
  }
}
