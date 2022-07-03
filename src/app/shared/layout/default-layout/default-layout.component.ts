import { Component, Inject, InjectionToken } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { Select, Store } from '@ngxs/store';
import { ComponentType } from '@angular/cdk/portal';
import { MatDialog } from '@angular/material/dialog';
import { AppState, NavigationItem } from '../../../core';

@Component({
  selector: 'app-default-layout',
  templateUrl: './default-layout.component.html',
  styleUrls: ['./default-layout.component.scss'],
})
export class DefaultLayoutComponent {
  @Select(AppState.navigationItems) readonly navigationItems$!: Observable<
    NavigationItem[]
  >;

  readonly isHandset$: Observable<boolean> = this.breakpointObserver
    .observe(Breakpoints.Handset)
    .pipe(
      map((result) => result.matches),
      shareReplay(),
    );

  constructor(
    private readonly breakpointObserver: BreakpointObserver,
    private readonly store: Store,
    @Inject(DEFAULT_LAYOUT_FAB_COMPONENT)
    private readonly fabComponent: ComponentType<any>,
    private readonly matDialog: MatDialog,
  ) {}

  onFabClicked() {
    this.matDialog.open(this.fabComponent);
  }
}

export const DEFAULT_LAYOUT_FAB_COMPONENT: InjectionToken<ComponentType<any>> =
  new InjectionToken<ComponentType<any>>('DEFAULT_LAYOUT_FAB_COMPONENT');
