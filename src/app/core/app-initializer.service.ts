import { Injectable } from '@angular/core';
import { Store } from '@ngxs/store';
import { SetAppI18n } from './store';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AppInitializerService {
  constructor(private readonly store: Store) {}

  init(): Observable<any> {
    return this.store.dispatch(new SetAppI18n());
  }
}
