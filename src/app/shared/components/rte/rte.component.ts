import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  selector: 'app-rte',
  standalone: true,
  templateUrl: './rte.component.html',
  styleUrl: './rte.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppRteComponent {
  rte = input.required<any[]>();
}
