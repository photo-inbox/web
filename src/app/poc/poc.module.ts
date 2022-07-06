import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PocRoutingModule } from './poc-routing.module';
import { PocComponent } from './poc.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { CameraComponent } from './camera/camera.component';
import { GalleryComponent } from './gallery/gallery.component';
import { SquaredImageComponent } from '../shared';
import { ViewerComponent } from './viewer/viewer.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { MatMenuModule } from '@angular/material/menu';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';

@NgModule({
  declarations: [
    PocComponent,
    CameraComponent,
    GalleryComponent,
    ViewerComponent,
    ToolbarComponent,
  ],
  imports: [
    CommonModule,
    PocRoutingModule,
    MatButtonModule,
    MatIconModule,
    SquaredImageComponent,
    MatMenuModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatAutocompleteModule,
    MatCardModule,
    MatChipsModule,
  ],
})
export class PocModule {}
