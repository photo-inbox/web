import { Component, HostBinding, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BooleanInput, coerceBooleanProperty } from '@angular/cdk/coercion';

@Component({
  selector: 'app-squared-image',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './squared-image.component.html',
  styleUrls: ['./squared-image.component.scss'],
})
export class SquaredImageComponent {
  @Input() src?: string;

  @Input()
  @HostBinding('class.rounded')
  set rounded(value: BooleanInput) {
    this._rounded = coerceBooleanProperty(value);
  }

  get rounded() {
    return this._rounded;
  }

  private _rounded = false;
}
