import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'lib-ui-hero',
  standalone: true,
  imports: [],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UiLibHeroComponent {}
