import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { UiLibFigureComponent } from '@apps/ui';
import { UiLibButtonComponent } from '../../shared/ui/button/button.component';

@Component({
  selector: 'app-teams',
  standalone: true,
  imports: [UiLibFigureComponent, RouterModule, UiLibButtonComponent],
  templateUrl: './teams.component.html',
  styleUrl: './teams.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TeamsComponent {}
