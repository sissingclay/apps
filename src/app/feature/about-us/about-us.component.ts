import {
  ChangeDetectionStrategy,
  Component,
  inject,
  OnInit,
} from '@angular/core';
import { OfficialsComponent } from '@apps/ui';
import {
  GET_INCLUDES,
  StoreService,
} from '../../shared/services/store/store.service';
import { HttpService } from '../../shared/services/http/http.service';

@Component({
  selector: 'app-about-us',
  standalone: true,
  imports: [OfficialsComponent],
  templateUrl: './about-us.component.html',
  styleUrl: './about-us.component.scss',
})
export class AboutUsComponent implements OnInit {
  private storeService = inject(StoreService);
  private test = inject(HttpService);
  officials: any;

  ngOnInit(): void {
    this.storeService.getEntryData('17Td148B65KusnECBM37Mt');
    this.test.getPageData('about-us').subscribe({
      next: (data: any) => {
        console.log('data', data);
        this.officials = data?.includes?.Entry;
      },
    });

    this.storeService.entry$.subscribe({
      next: (entry) => {
        console.log('entry', entry);
      },
    });
  }
}
