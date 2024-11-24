import { Component, inject, OnInit } from '@angular/core';
import { OfficialsComponent } from '@apps/ui';
import { StoreService } from '../../shared/services/store/store.service';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-mission',
  standalone: true,
  imports: [OfficialsComponent, AsyncPipe],
  templateUrl: './mission.component.html',
  styleUrl: './mission.component.scss',
})
export class MissionComponent implements OnInit {
  public storeService = inject(StoreService);
  public officials$ = this.storeService.officials$;

  ngOnInit(): void {
    this.storeService.getPageData('about-us');
    this.storeService.getOfficialsData();
  }
}
