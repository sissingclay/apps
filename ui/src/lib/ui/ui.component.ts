import { Component, Input } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { ROOT, TEAMS } from '../constants/routes.constants';
import { NgFor } from '@angular/common';

export interface IMenu {
  fields: IMenuData;
}

export interface IMenuData {
  url: string;
  title: string;
}

@Component({
  selector: 'lib-ui-app-bar',
  standalone: true,
  templateUrl: './ui.component.html',
  styleUrl: './ui.component.scss',
  imports: [RouterLink, NgFor, RouterLinkActive],
})
export class UiAppBarComponent {
  @Input() menuLists!: IMenu[];

  public isActive = false;

  public routesLinks = {
    home: ROOT,
    teams: TEAMS,
  };
}
