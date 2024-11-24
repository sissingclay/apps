import { Component, inject, OnInit } from '@angular/core';
import { OfficialsComponent } from '@apps/ui';
import { StoreService } from '../../shared/services/store/store.service';

import { AsyncPipe, JsonPipe } from '@angular/common';
import { AppRteComponent } from '../../shared/components/rte/rte.component';

@Component({
  selector: 'app-about-us',
  standalone: true,
  imports: [OfficialsComponent, AsyncPipe, JsonPipe, AppRteComponent],
  templateUrl: './about-us.component.html',
  styleUrl: './about-us.component.scss',
})
export class AboutUsComponent implements OnInit {
  public storeService = inject(StoreService);
  public page$ = this.storeService.page$;
  public officials$ = this.storeService.officials$;

  ngOnInit(): void {
    this.storeService.getPageData('about-us');
    this.storeService.getOfficialsData();
  }
}
