import { async, TestBed } from '@angular/core/testing';
import { NgxsModule, Store } from '@ngxs/store';
import { ItemsState } from './items.state';

describe('Items store', () => {
  let store: Store;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [NgxsModule.forRoot([ItemsState])],
    }).compileComponents();
    store = TestBed.get(Store);
  }));
});
