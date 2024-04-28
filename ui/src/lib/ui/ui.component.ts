import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'lib-ui-app-bar',
  standalone: true,
  templateUrl: './ui.component.html',
  styleUrl: './ui.component.scss',
  imports: [RouterModule],
})
export class UiAppBarComponent {
  isActive = false;
}
