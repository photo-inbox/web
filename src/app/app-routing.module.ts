import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppRoute } from './app.route';

const routes: Routes = [
  { path: '', redirectTo: AppRoute.items, pathMatch: 'full' },
  {
    path: AppRoute.items,
    loadChildren: () =>
      import('./items/items.module').then((m) => m.ItemsModule),
    title: 'items',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
