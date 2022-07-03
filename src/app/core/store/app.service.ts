import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { I18nDto } from '@photo-inbox/dtos';

@Injectable({
  providedIn: 'root',
})
export class AppService {
  constructor(private readonly http: HttpClient) {}

  getI18nByLang(lang: string): Observable<I18nDto> {
    return this.http.get<I18nDto>(`${environment.apiPrefix}/i18n/${lang}`);
  }
}
