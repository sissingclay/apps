import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
  inject,
} from '@angular/core';
import { StoreService } from '../../services/store/store.service';
import { UiLibButtonComponent } from '../../ui/button/button.component';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-teams-widget',
  standalone: true,
  imports: [UiLibButtonComponent, AsyncPipe],
  templateUrl: './teams.component.html',
  styleUrl: './teams.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppTeamsWidgetComponent implements OnInit {
  public storeService = inject(StoreService);

  ngOnInit(): void {
    this.storeService.getYearGroupData();
  }
}
