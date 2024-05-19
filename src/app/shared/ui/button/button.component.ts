import {
  ChangeDetectionStrategy,
  Component,
  computed,
  input,
} from '@angular/core';
import { RouterLink } from '@angular/router';
import { UNDER, TEAM_URL } from '../../helpers/helpers.year';

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
  link = input.required<any>();

  createUnder = computed(() => {
    return UNDER(this.year()).label;
  });

  createUnderRouter = computed(() => {
    return TEAM_URL(this.year(), this.link()[0].fields.slug);
  });
}
