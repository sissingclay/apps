import { Component, OnInit, inject } from '@angular/core';
import { OfficialsComponent, UiLibFigureComponent } from '@apps/ui';
import { UiLibButtonComponent } from '../../../../shared/ui/button/button.component';
import { StoreService } from '../../../../shared/services/store/store.service';
import {
  ActivatedRoute,
  NavigationEnd,
  Router,
  RouterLink,
  RouterLinkActive,
} from '@angular/router';
import { AsyncPipe, JsonPipe, NgIf } from '@angular/common';
import { TEAMS } from '@apps/ui';
import { takeUntil } from 'rxjs';
import { AppRteComponent } from '../../../../shared/components/rte/rte.component';
import { DestroyService } from '../../../../shared/services/destroy/destroy.service';

@Component({
  selector: 'app-team',
  standalone: true,
  imports: [
    UiLibButtonComponent,
    UiLibFigureComponent,
    OfficialsComponent,
    AsyncPipe,
    RouterLink,
    RouterLinkActive,
    AppRteComponent,
    JsonPipe,
    NgIf,
  ],
  templateUrl: './detail.component.html',
  styleUrl: './detail.component.scss',
})
export class DetailComponent {
  public readonly TEAMS_URL = TEAMS;

  public storeService = inject(StoreService);
}
