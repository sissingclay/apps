import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ROOT, TEAMS } from '../constants/routes.constants';

@Component({
  selector: 'lib-ui-app-bar',
  standalone: true,
  templateUrl: './ui.component.html',
  styleUrl: './ui.component.scss',
  imports: [RouterLink],
})
export class UiAppBarComponent {
  public isActive = false;
  public routesLinks = {
    home: ROOT,
    teams: TEAMS,
  };
}
