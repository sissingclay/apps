import { ChangeDetectionStrategy, Component } from '@angular/core';

import {
  UiLibButtonComponent,
  UiLibFigureComponent,
  UiLibHeroComponent,
} from '@apps/ui';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [UiLibHeroComponent, UiLibButtonComponent, UiLibFigureComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent {}
