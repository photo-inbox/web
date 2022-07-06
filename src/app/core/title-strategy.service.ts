import { RouterStateSnapshot, TitleStrategy } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { TranslateService } from '@ngx-translate/core';
import { take } from 'rxjs';

export class TitleStrategyService extends TitleStrategy {
  constructor(
    private readonly title: Title,
    private readonly translate: TranslateService,
  ) {
    super();
  }

  override updateTitle(routerState: RouterStateSnapshot): void {
    const title = this.buildTitle(routerState) ?? 'default';

    this.translate
      .get(`title.${title}`)
      .pipe(take(1))
      .subscribe((title) => this.title.setTitle(title));
  }
}
