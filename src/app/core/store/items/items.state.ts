import { Action, Selector, State, StateContext } from '@ngxs/store';
import { GetItems } from './items.actions';
import { ItemDto } from '@photo-inbox/dtos';
import { Observable, tap } from 'rxjs';
import { Injectable } from '@angular/core';
import { ItemsStateModel } from './items.models';
import { ITEMS_DEFAULTS } from './items.defauts';
import { ItemsService } from '../../api';

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

  constructor(private readonly service: ItemsService) {}

  @Action(GetItems)
  public getItems(ctx: StateContext<ItemsStateModel>): Observable<any> {
    return this.service
      .getItems()
      .pipe(tap((items) => ctx.patchState({ items })));
  }
}
