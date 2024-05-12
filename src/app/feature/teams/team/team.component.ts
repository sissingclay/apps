import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
  inject,
} from '@angular/core';
import { OfficialsComponent, UiLibFigureComponent } from '@apps/ui';
import { UiLibButtonComponent } from '../../../shared/ui/button/button.component';
import { StoreService } from '../../../shared/services/store/store.service';

@Component({
  selector: 'app-team',
  standalone: true,
  imports: [UiLibButtonComponent, UiLibFigureComponent, OfficialsComponent],
  templateUrl: './team.component.html',
  styleUrl: './team.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TeamComponent implements OnInit {
  public storeService = inject(StoreService);

  ngOnInit(): void {
    this.storeService.getYearTeamsData();
  }
}
