import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
  inject,
} from '@angular/core';
import { StoreService } from '../../services/store/store.service';
import { UiLibButtonComponent } from '../../ui/button/button.component';
import { AsyncPipe, JsonPipe, KeyValuePipe } from '@angular/common';

@Component({
  selector: 'app-teams-widget',
  standalone: true,
  imports: [UiLibButtonComponent, AsyncPipe, KeyValuePipe, JsonPipe],
  templateUrl: './teams.component.html',
  styleUrl: './teams.component.scss',
})
export class AppTeamsWidgetComponent implements OnInit {
  public storeService = inject(StoreService);

  ngOnInit(): void {
    this.storeService.getYearGroupData();
  }
}
