import { Injectable, inject } from '@angular/core';
import { HttpService } from '../http/http.service';
import { BehaviorSubject, Observable } from 'rxjs';
import { IValue, YearGroup } from '../http/year-group.interface';

@Injectable({
  providedIn: 'root',
})
export class StoreService {
  private _homeData$ = new BehaviorSubject<any>(null);
  private _yearGroups$ = new BehaviorSubject<YearGroup[]>([]);
  private _yearGroupsEntries$ = new BehaviorSubject<YearGroup[]>([]);
  private _value$ = new BehaviorSubject<any>([]);

  get homeData$(): Observable<any> {
    return this._homeData$;
  }

  get yearGroups$(): Observable<YearGroup[]> {
    return this._yearGroups$;
  }

  get value$(): Observable<IValue> {
    return this._value$;
  }

  private getContentfulData = inject(HttpService);

  getHomeData(): void {
    this.getContentfulData.getHomeData().subscribe({
      next: (val: any) => {
        const HERO_DATA: any[] = [];
        let heroImage;
        val.items.forEach((element: any) => {
          element?.fields?.hero?.content.forEach((contents: any) => {
            HERO_DATA.push(contents);
          });
          heroImage = Image(val, element?.fields?.heroImage);
        });

        this._homeData$.next({ heroData: HERO_DATA, heroImage });
      },
    });
  }

  getYearGroupData(): void {
    this.getContentfulData.getYearGroupData().subscribe({
      next: (val: any) => {
        console.log('getYearGroupData', val);
        this._yearGroups$.next(val.items);
        this._yearGroupsEntries$.next(val.includes.Entry);
      },
    });
  }

  getValueData(): void {
    this.getContentfulData.getValueData().subscribe({
      next: (val: any) => {
        console.log('val', val);
        const VALUE: IValue = {
          hero: {},
          list: [],
        };

        val.items.forEach((value: any) => {
          const IMAGE = Image(val, value.fields.image.sys);

          if (value.metadata.tags[0].sys.id === 'homeHero') {
            VALUE.hero = {
              ...value,
              file: IMAGE,
            };
          } else {
            VALUE.list.push({
              ...value,
              file: IMAGE,
            });
          }
        });

        console.log('VALUE', VALUE);
        this._value$.next(VALUE);
      },
    });
  }

  getYearTeamsData(): void {
    this.getContentfulData.getYearTeamsData().subscribe({
      next: (val: any) => {
        console.log('val', val);
      },
    });
  }
}

export const Image = (val: any, sys: any) => {
  let image = {};
  val.includes.Asset.forEach((asset: any) => {
    if (asset.id === sys.id || asset.sys.id === sys.id) {
      image = asset;
    }
  });

  return image;
};
