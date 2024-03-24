import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'lib-ui-button',
  standalone: true,
  imports: [],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UiLibButtonComponent {}
