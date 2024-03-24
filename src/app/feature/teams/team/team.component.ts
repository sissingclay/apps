import { ChangeDetectionStrategy, Component } from '@angular/core';
import { UiLibButtonComponent, UiLibFigureComponent } from '@apps/ui';

@Component({
  selector: 'app-team',
  standalone: true,
  imports: [UiLibButtonComponent, UiLibFigureComponent],
  templateUrl: './team.component.html',
  styleUrl: './team.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TeamComponent {}
