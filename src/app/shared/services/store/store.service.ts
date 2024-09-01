import { Injectable, inject } from '@angular/core';
import { HttpService } from '../http/http.service';
import { BehaviorSubject, Observable, filter, map } from 'rxjs';
import { IValue, YearGroup } from '../http/year-group.interface';

@Injectable({
  providedIn: 'root',
})
export class StoreService {
  private _homeData$ = new BehaviorSubject<any>(null);
  private _yearGroups$ = new BehaviorSubject<YearGroup | null>(null);
  private _yearGroupsOrdered$ = new BehaviorSubject<string[]>([]);
  private _yearGroupsEntries$ = new BehaviorSubject<YearGroup[]>([]);
  private _value$ = new BehaviorSubject<any>([]);
  private _teams$ = new BehaviorSubject<any>(null);
  private _entryData$ = new BehaviorSubject({});

  teamSlug$ = new BehaviorSubject('');
  year!: string;

  public get homeData$(): Observable<any> {
    return this._homeData$;
  }

  public get yearGroupsOrdered$(): Observable<string[]> {
    return this._yearGroupsOrdered$;
  }

  public get yearGroups$(): Observable<YearGroup | null> {
    return this._yearGroups$;
  }

  public get value$(): Observable<IValue> {
    return this._value$;
  }

  public get entry$(): Observable<any> {
    return this._entryData$;
  }

  private getContentfulData = inject(HttpService);

  public getHomeData(): void {
    this.getContentfulData.getHomeData().subscribe({
      next: (val: any) => {
        const HERO_DATA: any[] = [];
        let heroImage;
        val?.items.forEach((element: any) => {
          element?.fields?.hero?.content.forEach((contents: any) => {
            HERO_DATA.push(contents);
          });
          heroImage = Image(val, element?.fields?.heroImage);
        });

        this._homeData$.next({ heroData: HERO_DATA, heroImage });
      },
    });
  }

  public getTeams$(year: string): Observable<any> {
    return this.yearGroups$.pipe(
      filter(Boolean),
      map((res: any) => {
        return res[year];
      })
    );
  }

  public getTeam$(slug: string): Observable<any> {
    return this._teams$.pipe(
      filter(Boolean),
      map((teams) => {
        const TEAM = teams?.items?.filter(
          (team: any) => team?.fields.slug === slug
        )?.[0];

        console.log('TEAM', TEAM);
        console.log('teams', teams);

        if (TEAM) {
          const officials = GET_INCLUDES(teams, TEAM.fields.officials);
          const sponsors = GET_INCLUDES(teams, TEAM.fields.sponsor);
          const image = teams.includes.Asset.find(
            (asset: any) => asset?.sys?.id === TEAM.fields?.image?.sys?.id
          );

          console.log('image', image);

          if (sponsors.length) {
            sponsors.forEach((sponsor) => {
              sponsor.fields.logo = GET_INCLUDES(teams, [
                sponsor.fields.logo,
              ])?.[0];
            });
          }

          TEAM.fields.officials = officials;
          TEAM.fields.sponsor = sponsors;
          TEAM.fields.image = image;
        }

        return TEAM;
      })
    );
  }

  public getYearGroupData(): void {
    if (!this._yearGroups$.value) {
      this.getContentfulData.getYearGroupData().subscribe({
        next: (val: any) => {
          const TEAMS = setTeam(val);
          const SORTED = Object.keys(TEAMS).sort((a: any, b: any) => {
            if (a < b) {
              return 1;
            }
            if (a > b) {
              return -1;
            }

            return 0;
          });
          this._yearGroupsOrdered$.next(SORTED);
          this._yearGroups$.next(TEAMS);
          this._yearGroupsEntries$.next(val.includes.Entry);
        },
      });
    }
  }

  public getValueData(): void {
    this.getContentfulData
      .getValueData()
      .pipe(filter(Boolean))
      .subscribe({
        next: (val: any) => {
          const VALUE: IValue = {
            hero: {},
            list: [],
          };

          val?.items?.forEach((value: any) => {
            const IMAGE = Image(val, value?.fields.image.sys);

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

          this._value$.next(VALUE);
        },
      });
  }

  public getYearTeamsData(): void {
    if (!this._teams$.value) {
      this.getContentfulData.getYearTeamsData().subscribe({
        next: (val: any) => {
          console.log('val', val);
          this._teams$.next(val);
        },
      });
    }
  }

  public getEntryData(entryId: string): void {
    this.getContentfulData.getEntryData(entryId).subscribe({
      next: (data) => {
        this._entryData$.next({ ...this._entryData$.value, entryId: data });
      },
    });
  }
}

export const GET_INCLUDES = (val: any, details: any[]) => {
  const INFO: any[] = [];
  if (Array.isArray(details)) {
    details.map((detail) => {
      const INCLUDE_TYPE = detail.sys.linkType
        ? detail.sys.linkType
        : detail.sys.type;
      const TYPE = val.includes[INCLUDE_TYPE];
      TYPE.forEach((ins: any) => {
        if (ins.sys.id === detail.sys.id) {
          INFO.push(ins);
        }
      });
    });
  }

  return INFO;
};

export const setTeam = (val: any) => {
  const TEAMS: any = {};
  val?.items?.forEach((item: any) => {
    const FIELDS = item.fields;
    TEAMS[FIELDS.year] = [];

    FIELDS.teams.forEach((team: any) => {
      val.includes[team.sys.linkType].forEach((ins: any) => {
        if (ins.sys.id === team.sys.id) {
          TEAMS[FIELDS.year].push(ins);
        }
      });
    });
  });

  return TEAMS;
};

export const Image = (val: any, sys: any) => {
  let image = {};
  val.includes.Asset.forEach((asset: any) => {
    if (asset.id === sys.id || asset.sys.id === sys.id) {
      image = asset;
    }
  });

  return image;
};
