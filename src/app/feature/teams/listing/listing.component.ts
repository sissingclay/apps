import { ChangeDetectionStrategy, Component } from '@angular/core';
import { UiLibButtonComponent, UiLibFigureComponent } from '@apps/ui';

@Component({
  selector: 'app-teams',
  standalone: true,
  imports: [UiLibButtonComponent, UiLibFigureComponent],
  templateUrl: './listing.component.html',
  styleUrl: './listing.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TeamsListingComponent {}
