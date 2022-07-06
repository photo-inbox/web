import { Component, OnDestroy, OnInit } from '@angular/core';
import { PocService } from '../poc.service';
import { ActivatedRoute } from '@angular/router';
import { Subscription as DexieSubscription } from 'dexie';
import {
  debounceTime,
  filter,
  Subscription as RxJsSubscription,
  tap,
} from 'rxjs';
import { map } from 'rxjs/operators';
import { FormBuilder, FormControl } from '@angular/forms';
import { ItemModel } from '../poc.models';

@Component({
  selector: 'app-viewer',
  templateUrl: './viewer.component.html',
  styleUrls: ['./viewer.component.scss'],
})
export class ViewerComponent implements OnInit, OnDestroy {
  item!: ItemModel;

  private routeSub$!: RxJsSubscription;
  private dbSub$!: DexieSubscription;
  private formSub$!: RxJsSubscription;

  readonly labelCtrl: FormControl = this.fb.control(null);
  labelOptions: string[] = [];

  constructor(
    private readonly service: PocService,
    private readonly activatedRoute: ActivatedRoute,
    private readonly fb: FormBuilder,
  ) {}

  ngOnInit(): void {
    this.routeSub$ = this.activatedRoute.paramMap
      .pipe(
        map((params) => Number(params.get('id'))),
        filter((id) => !!id),
        tap(() => this.dbSub$?.unsubscribe()),
      )
      .subscribe((id) => {
        this.dbSub$ = this.service.getItem(id).subscribe((item) => {
          this.item = item;
          this.labelCtrl.setValue(item?.label, { emitEvent: false });
        });
      });

    this.formSub$ = this.labelCtrl.valueChanges
      .pipe(debounceTime(300))
      .subscribe(async (value) => {
        await this.service.updateItemLabel(this.item?.id, value);
        this.labelOptions = await this.service.searchItemLabels(value);
      });
  }

  ngOnDestroy(): void {
    this.routeSub$.unsubscribe();
    this.dbSub$.unsubscribe();
    this.formSub$.unsubscribe();
  }

  async toggleComplete() {
    await this.service.toggleItemIsCompleted(this.item.id);
  }
}
