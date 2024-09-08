import {
  ChangeDetectionStrategy,
  Component,
  computed,
  input,
} from '@angular/core';
import { RouterLink } from '@angular/router';
import { UNDER, TEAM_URL } from '../../helpers/helpers.year';
import { YearGroupCollection } from '../../interface/teams.interface';

@Component({
  selector: 'app-ui-button',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UiLibButtonComponent {
  year = input.required<YearGroupCollection>();

  createUnder = computed(() => {
    return UNDER(this.year().year);
  });

  createUnderRouter = computed(() => {
    return TEAM_URL(
      this.year().year,
      this.year().teamsCollection.items[0].slug
    );
  });
}
