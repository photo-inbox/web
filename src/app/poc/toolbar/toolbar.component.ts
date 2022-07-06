import { Component, Input } from '@angular/core';
import { Location } from '@angular/common';
import { MatMenu } from '@angular/material/menu';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss'],
})
export class ToolbarComponent {
  @Input() menu?: MatMenu;

  constructor(private readonly location: Location) {}

  goBack() {
    this.location.back();
  }
}
