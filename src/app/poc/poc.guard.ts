import { Injectable } from '@angular/core';
import { CanLoad, Route, UrlSegment, UrlTree } from '@angular/router';
import { from, Observable, of, zip } from 'rxjs';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { map, shareReplay } from 'rxjs/operators';
import { PocService } from './poc.service';

@Injectable({
  providedIn: 'root',
})
export class PocGuard implements CanLoad {
  private readonly isHandset$ = this.breakpointObserver
    .observe(Breakpoints.Handset)
    .pipe(
      map((result) => result.matches),
      shareReplay(),
    );

  private readonly videoStream$ = from(
    navigator?.mediaDevices?.getUserMedia(this.service.constrains) ??
      of(undefined),
  );

  constructor(
    private readonly breakpointObserver: BreakpointObserver,
    private readonly service: PocService,
  ) {}

  canLoad(
    route: Route,
    segments: UrlSegment[],
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    return zip([this.isHandset$, this.videoStream$]).pipe(
      map(([isHandset, videoStream]) => isHandset && !!videoStream),
    );
  }
}
