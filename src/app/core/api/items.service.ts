import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ItemDto } from '@photo-inbox/dtos';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ItemsService {
  private readonly endpointPrefix: string = 'items';

  constructor(private readonly http: HttpClient) {}

  getItems(): Observable<ItemDto[]> {
    return this.http.get<ItemDto[]>(
      `${environment.apiPrefix}/${this.endpointPrefix}`,
    );
  }
}
