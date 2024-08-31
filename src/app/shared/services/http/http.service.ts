import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { ConfigService } from '../config/config.service';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  private http = inject(HttpClient);
  private configService = inject(ConfigService);

  public readonly config = this.configService.config;

  public getHomeData() {
    return this.http.get(`${this.configService.api_url}&content_type=home`);
  }

  public getYearGroupData(year?: string) {
    const YEAR_QUERY = year ? `&fields.year=${year}` : '';

    return this.http.get(
      `${this.configService.api_url}&content_type=yearGroup${YEAR_QUERY}`
    );
  }

  public getValueData() {
    return this.http.get(`${this.configService.api_url}&content_type=value`);
  }

  public getYearTeamsData() {
    return this.http.get(`${this.configService.api_url}&content_type=team`);
  }

  public getMenuData() {
    return this.http.get(`${this.configService.api_url}&content_type=menu`);
  }

  public getPageData(entryId: string) {
    return this.http.get(
      `${this.configService.api_url}&content_type=page&fields.slug=${entryId}`
    );
  }

  public getEntryData(entryId: string) {
    return this.http.get(this.configService.getEntry(entryId));
  }
}
