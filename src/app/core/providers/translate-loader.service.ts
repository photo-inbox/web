import { TranslateLoader } from '@ngx-translate/core';
import { map, Observable } from 'rxjs';
import { I18nService } from '../api';

export class TranslateLoaderService extends TranslateLoader {
  constructor(private readonly i18n: I18nService) {
    super();
  }

  override getTranslation(lang: string): Observable<any> {
    return this.i18n.getI18nByLang(lang).pipe(map((i18n) => i18n.document));
  }
}
