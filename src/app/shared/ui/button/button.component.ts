import {
  ChangeDetectionStrategy,
  Component,
  computed,
  input,
} from '@angular/core';
import { RouterLink } from '@angular/router';
import { TEAMS } from '../../constants/routes.constants';

@Component({
  selector: 'app-ui-button',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UiLibButtonComponent {
  year = input.required<string>();

  createUnder = computed(() => {
    const DATE = new Date();
    const CURRENT_YEAR = DATE.getFullYear();
    const CURRENT_MONTH = DATE.getMonth();
    let under7Year = parseInt(this.year().substring(0, 4), 10);
    let count = 0;

    while (under7Year < CURRENT_YEAR) {
      under7Year = under7Year + 1;
      count++;
    }

    if (CURRENT_MONTH < 7) {
      count = count - 1;
    }

    return `Under ${count + 7}'s`;
  });

  createUnderRouter = computed(() => {
    return [...TEAMS, this.year()];
  });
}
