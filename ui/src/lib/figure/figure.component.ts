import { Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'lib-ui-figure',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './figure.component.html',
  styleUrl: './figure.component.scss',
})
export class UiLibFigureComponent {
  subtitle = input(false);
  background = input<'secondary' | 'tertiary'>();
}
