import { Component, inject, OnInit } from '@angular/core';
import { OfficialsComponent } from '@apps/ui';
import { StoreService } from '../../shared/services/store/store.service';

import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-about-us',
  standalone: true,
  imports: [OfficialsComponent, AsyncPipe],
  templateUrl: './about-us.component.html',
  styleUrl: './about-us.component.scss',
})
export class AboutUsComponent implements OnInit {
  public storeService = inject(StoreService);

  ngOnInit(): void {
    this.storeService.getPageData('about-us');
  }
}
