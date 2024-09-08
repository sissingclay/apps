import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { UiAppBarComponent, UiLibFigureComponent } from '@apps/ui';

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
export class AppComponent {}
