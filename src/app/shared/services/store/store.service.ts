import { Injectable, inject } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Apollo } from 'apollo-angular';
import { GET_HOME_HERO } from '../graphql/graphql.home.queries';
import { HomeCollection } from '../../interface/home.interface';
import {
  GET_PAGE,
  GET_TEAM,
  GET_YEAR_GROUPS,
  GET_YEAR_TEAMS,
} from '../graphql/graphql.teams.queries';
import {
  Team,
  TeamCollection,
  YearGroupCollection,
} from '../../interface/teams.interface';
import { PageData, Value } from '../../interface/page.interface';
import { GET_VALUE } from '../graphql/graphql.value.queries';
import { GET_MENU } from '../graphql/graphql.menu.queries';
import { Menu } from '../../interface/menu.interface';

@Injectable({
  providedIn: 'root',
})
export class StoreService {
  private _homeData$ = new BehaviorSubject<HomeCollection | undefined>(
    undefined
  );
  private _yearGroups$ = new BehaviorSubject<YearGroupCollection[]>([]);
  private _teams$ = new BehaviorSubject<TeamCollection[]>([]);
  private _team$ = new BehaviorSubject<Team | null>(null);
  private _page$ = new BehaviorSubject<PageData | null>(null);
  private _valueData$ = new BehaviorSubject<Value[] | null>(null);
  private _valueHeroData$ = new BehaviorSubject<Value[] | null>(null);
  private _menu$ = new BehaviorSubject<Menu[]>([]);

  private apollo = inject(Apollo);

  teamSlug$ = new BehaviorSubject('');
  year!: string;

  public get homeData$(): Observable<any> {
    return this._homeData$;
  }

  public get yearGroups$(): Observable<YearGroupCollection[]> {
    return this._yearGroups$;
  }

  public get valueData$(): Observable<Value[] | null> {
    return this._valueData$;
  }

  public get valueHeroData$(): Observable<Value[] | null> {
    return this._valueHeroData$;
  }

  public get teams$(): Observable<TeamCollection[]> {
    return this._teams$;
  }

  public get team$(): Observable<Team | null> {
    return this._team$;
  }

  public get page$(): Observable<PageData | null> {
    return this._page$;
  }

  public get menu$(): Observable<Menu[]> {
    return this._menu$;
  }

  public getHomeData(): void {
    if (!this._homeData$?.value) {
      this.apollo
        .watchQuery({
          query: GET_HOME_HERO,
        })
        .valueChanges.subscribe(({ data, error }: any) => {
          this._homeData$.next(data);
        });
    }
  }

  public getTeams(year: Date): void {
    this.apollo
      .watchQuery({
        query: GET_YEAR_TEAMS,
        variables: {
          where: {
            yearGroup: {
              year: year.toISOString(),
            },
          },
          order: 'name_ASC',
        },
      })
      .valueChanges.subscribe(({ data, error }: any) => {
        this._teams$.next(data.teamCollection.items);
      });
  }

  public getTeam(slug: string): void {
    this.apollo
      .watchQuery({
        query: GET_TEAM,
        variables: {
          where: {
            slug,
          },
          limit: 1,
        },
      })
      .valueChanges.subscribe(({ data, error }: any) => {
        this._team$.next(data.teamCollection.items[0]);
      });
  }

  public getYearGroupData(): void {
    if (!this._yearGroups$?.value.length) {
      this.apollo
        .watchQuery({
          query: GET_YEAR_GROUPS,
          variables: {
            order: 'year_DESC',
          },
        })
        .valueChanges.subscribe(({ data, error }: any) => {
          this._yearGroups$.next(data.yearGroupCollection.items);
        });
    }
  }

  public getPageData(slug: string): void {
    this.apollo
      .watchQuery({
        query: GET_PAGE,
        variables: {
          where: {
            slug,
          },
          limit: 1,
        },
      })
      .valueChanges.subscribe(({ data, error }: any) => {
        this._page$.next(data.pageCollection.items[0]);
      });
  }

  public getValueData(): void {
    this.apollo
      .watchQuery({
        query: GET_VALUE,
      })
      .valueChanges.subscribe(({ data, error }: any) => {
        if (data?.valueCollection?.items?.length) {
          const DATA = [...data.valueCollection.items];
          DATA.shift();
          this._valueHeroData$.next([data?.valueCollection?.items[0]]);
          this._valueData$.next(DATA);
        }
      });
  }

  public getMenuData(): void {
    this.apollo
      .watchQuery({
        query: GET_MENU,
      })
      .valueChanges.subscribe(({ data, error }: any) => {
        this._menu$.next(data?.menuCollection?.items);
      });
  }
}
