import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { UiLibButtonComponent, UiLibFigureComponent } from '@apps/ui';

@Component({
  selector: 'app-teams',
  standalone: true,
  imports: [UiLibButtonComponent, UiLibFigureComponent, RouterModule],
  templateUrl: './teams.component.html',
  styleUrl: './teams.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TeamsComponent {}
