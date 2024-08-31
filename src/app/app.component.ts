import { HttpClientModule } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { IMenu, UiAppBarComponent, UiLibFigureComponent } from '@apps/ui';
import { HttpService } from './shared/services/http/http.service';

@Component({
  standalone: true,
  imports: [
    UiAppBarComponent,
    UiLibFigureComponent,
    RouterModule,
    HttpClientModule,
  ],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  public httpService = inject(HttpService);
  public menuLists!: IMenu[];

  ngOnInit(): void {
    this.httpService.getMenuData().subscribe({
      next: (data: any) => {
        const topMenu: IMenu[] = [];
        console.log('data', data);
        data.items.forEach((item: any) => {

          if (!item.fields.parent) {
            topMenu.push(item);
          }
        });

        this.menuLists = topMenu;
      },
    });
  }
}
