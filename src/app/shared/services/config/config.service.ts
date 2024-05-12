import { Injectable } from '@angular/core';
import { IConfig } from './config.interface';

@Injectable({
  providedIn: 'root',
})
export class ConfigService {
  public readonly config: IConfig = {
    domain: 'https://cdn.contentful.com',
    clientId: 'wk16unitqhia',
    environments: 'master',
    access_token: 'R1IO4UXYeyfeMO1zR9Qe0eVr7579RJs283a2-7Ygu40',
    entries: 'entries',
  };
  public readonly api_url = `${this.config.domain}/spaces/${this.config.clientId}/environments/${this.config.environments}/entries?access_token=${this.config.access_token}`;
}
