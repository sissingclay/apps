import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { OfficialsComponent, UiLibFigureComponent } from '@apps/ui';
import { UiLibButtonComponent } from '../../../../shared/ui/button/button.component';
import { StoreService } from '../../../../shared/services/store/store.service';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { AsyncPipe } from '@angular/common';
import { TEAMS } from '@apps/ui';

@Component({
  selector: 'app-team-resource',
  standalone: true,
  imports: [
    UiLibButtonComponent,
    UiLibFigureComponent,
    OfficialsComponent,
    AsyncPipe,
    RouterLink,
    RouterLinkActive,
  ],
  templateUrl: './resource.component.html',
  styleUrl: './resource.component.scss',
})
export class ResourceComponent {
  public year = '';
  public under!: any;
  public readonly TEAMS_URL = TEAMS;

  public storeService = inject(StoreService);
}
