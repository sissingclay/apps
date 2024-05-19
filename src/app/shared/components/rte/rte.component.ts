import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-rte',
  standalone: true,
  imports: [],
  templateUrl: './rte.component.html',
  styleUrl: './rte.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppRteComponent {
  rte = input.required<any[]>();
}
