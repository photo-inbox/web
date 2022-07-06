import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PocComponent } from './poc.component';
import { CameraComponent } from './camera/camera.component';
import { PocRoute } from './poc.route';
import { GalleryComponent } from './gallery/gallery.component';
import { ViewerComponent } from './viewer/viewer.component';

const routes: Routes = [
  { path: '', redirectTo: PocRoute.camera, pathMatch: 'full' },

  {
    path: '',
    component: PocComponent,
    children: [
      { path: PocRoute.camera, component: CameraComponent },
      { path: PocRoute.gallery, component: GalleryComponent },
      { path: `${PocRoute.gallery}/:id`, component: ViewerComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PocRoutingModule {}
