import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppRoute } from './app.route';
import { Feature, FeatureGuard } from './shared';
import { PocGuard } from './poc/poc.guard';

const routes: Routes = [
  { path: '', redirectTo: AppRoute.poc, pathMatch: 'full' },

  {
    path: AppRoute.items,
    loadChildren: () =>
      import('./items/items.module').then((m) => m.ItemsModule),
    title: 'items',
    canLoad: [FeatureGuard],
    data: {
      feature: Feature.items,
    },
  },
  {
    path: AppRoute.poc,
    loadChildren: () => import('./poc/poc.module').then((m) => m.PocModule),
    canLoad: [PocGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
