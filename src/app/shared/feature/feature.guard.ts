import { Injectable } from '@angular/core';
import { CanLoad, Route, UrlSegment, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { Feature } from './feature';

@Injectable({
  providedIn: 'root',
})
export class FeatureGuard implements CanLoad {
  canLoad(
    route: Route,
    segments: UrlSegment[],
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    if (!route.data) {
      return true;
    }

    if (!('feature' in route.data)) {
      return true;
    }

    const feature = route.data['feature'] as Feature;
    return environment.features[feature];
  }
}
