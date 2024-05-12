import { ChangeDetectionStrategy, Component } from '@angular/core';
import { UiLibFigureComponent } from '@apps/ui';
import { AppTeamsWidgetComponent } from '../../../shared/components/teams/teams.component';

@Component({
  selector: 'app-teams',
  standalone: true,
  imports: [AppTeamsWidgetComponent, UiLibFigureComponent],
  templateUrl: './listing.component.html',
  styleUrl: './listing.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TeamsListingComponent {}
