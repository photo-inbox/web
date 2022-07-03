import {
  Action,
  createSelector,
  Selector,
  State,
  StateContext,
} from '@ngxs/store';
import { GetItems } from './items.actions';
import { ItemDto } from '@photo-inbox/dtos';
import { Observable, tap } from 'rxjs';
import { Injectable } from '@angular/core';
import { ItemsStateModel } from './items.models';
import { ITEMS_DEFAULTS } from './items.defauts';
import { ItemsService } from './items.service';

@State<ItemsStateModel>({
  name: 'items',
  defaults: ITEMS_DEFAULTS,
})
@Injectable()
export class ItemsState {
  @Selector()
  static items(state: ItemsStateModel): ItemDto[] {
    return state.items;
  }

  static item(id: string): (state: ItemsStateModel) => ItemDto {
    return createSelector([ItemsState], (state: ItemsStateModel) => {
      const item = state.items.find((item) => item.id === id);
      if (!item) {
        throw new Error('Not found');
      }

      return item;
    });
  }

  constructor(private readonly service: ItemsService) {}

  @Action(GetItems)
  public getItems(ctx: StateContext<ItemsStateModel>): Observable<any> {
    return this.service
      .getItems()
      .pipe(tap((items) => ctx.patchState({ items })));
  }
}
