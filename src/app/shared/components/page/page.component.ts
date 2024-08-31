import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  inject,
  OnInit,
} from '@angular/core';
import { AppRteComponent } from '../rte/rte.component';
import { ConfigService } from '../../services/config/config.service';
import { ActivatedRoute } from '@angular/router';
import { HttpService } from '../../services/http/http.service';
import { mergeMap, switchMap } from 'rxjs';

@Component({
  selector: 'app-page',
  standalone: true,
  imports: [AppRteComponent],
  templateUrl: './page.component.html',
  styleUrl: './page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PageComponent implements OnInit {
  private httpService = inject(HttpService);
  private router = inject(ActivatedRoute);
  private cd = inject(ChangeDetectorRef);

  public page: any;

  ngOnInit(): void {
    console.log('test');
    this.router.params
      .pipe(mergeMap((data: any) => this.httpService.getPageData(data?.page)))
      .subscribe({
        next: (page: any) => {
          console.log('page', page);
          this.page = page;
          this.cd.markForCheck();
        },
      });
  }
}
