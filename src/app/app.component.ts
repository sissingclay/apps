import { HttpClientModule } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { UiAppBarComponent, UiLibFigureComponent } from '@apps/ui';
import { Menu } from './shared/interface/menu.interface';
import { StoreService } from './shared/services/store/store.service';
import { AsyncPipe } from '@angular/common';

@Component({
  standalone: true,
  imports: [
    UiAppBarComponent,
    UiLibFigureComponent,
    RouterModule,
    HttpClientModule,
    AsyncPipe,
  ],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  public storeService = inject(StoreService);

  ngOnInit(): void {
    this.storeService.getMenuData();
  }
}
