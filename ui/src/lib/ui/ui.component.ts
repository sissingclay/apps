import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'lib-ui-app-bar',
  standalone: true,
  templateUrl: './ui.component.html',
  styleUrl: './ui.component.scss',
  imports: [RouterLink],
})
export class UiAppBarComponent {
  isActive = false;
}
