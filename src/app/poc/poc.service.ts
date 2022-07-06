import { Injectable } from '@angular/core';
import Dexie, { liveQuery, Observable, Table } from 'dexie';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';
import { ItemModel } from './poc.models';

@Injectable({
  providedIn: 'root',
})
export class PocService {
  public readonly constrains: MediaStreamConstraints = {
    video: {
      width: { ideal: 720 },
      height: { ideal: 1280 },
    },
  };

  private readonly db: DB = new DB();

  private readonly snackbarAction: string = 'X';
  private readonly snackBarConfig: MatSnackBarConfig = {
    duration: 2000,
    verticalPosition: 'top',
  };

  constructor(private readonly matSnackBar: MatSnackBar) {}

  getAllItems(): Observable<ItemModel[]> {
    return liveQuery(() => this.db.items.toArray());
  }

  getItem(id: number): Observable<ItemModel> {
    return liveQuery(async () => {
      const item = await this.db.items.get(id);
      if (!item) {
        throw new Error('Not found');
      }

      return item;
    });
  }

  getLatestItem(): Observable<ItemModel | undefined> {
    return liveQuery(() => this.db.items.toCollection().last());
  }

  addItem(item: Omit<ItemModel, 'id'>): Promise<number> {
    return this.db.items.add(item as ItemModel);
  }

  async toggleItemIsCompleted(id: number): Promise<number> {
    const item = await this.db.items.get(id);
    if (!item) {
      throw new Error('Not found');
    }

    const res = await this.db.items.update(id, {
      isCompleted: !item.isCompleted,
    });

    this.matSnackBar.open(
      `Marked item as ${item.isCompleted ? 'incomplete' : 'complete'}`,
      this.snackbarAction,
      this.snackBarConfig,
    );

    return res;
  }

  async clearCompletedItems(): Promise<void> {
    const items = await this.db.items.toArray();
    const ids = items.filter((item) => item.isCompleted).map((item) => item.id);

    const res = await this.db.items.bulkDelete(ids);

    this.matSnackBar.open(
      `Deleted ${ids.length} completed item(s)`,
      this.snackbarAction,
      this.snackBarConfig,
    );

    return res;
  }

  async searchItemLabels(prefix: string): Promise<string[]> {
    const items = await this.db.items
      .filter((item) => item.label?.startsWith(prefix) ?? false)
      .toArray();
    const labels = items.map((item) => item.label as string);

    return Array.from(new Set(labels));
  }

  async updateItemLabel(id: number, label?: string): Promise<number> {
    const item = await this.db.items.get(id);
    if (!item) {
      throw new Error('Not found');
    }

    return this.db.items.update(id, { label });
  }
}

class DB extends Dexie {
  items!: Table<ItemModel, number>;

  constructor() {
    super('photo-inbox-poc');
    this.version(3).stores({
      items: '++id, imageSrc, label, isCompleted',
    });
  }
}
