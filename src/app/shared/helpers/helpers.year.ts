import { TEAMS } from '@apps/ui';
import { YearMetaData } from '../interface/teams.interface';

export const yearsArrayList: { [key: string]: any } = {};

export const UNDER = (year: Date): YearMetaData => {
  const DATE = new Date();
  const CURRENT_YEAR = DATE.getFullYear();
  const CURRENT_MONTH = DATE.getMonth();
  let under7Year = new Date(year).getFullYear();
  let count = 0;

  while (under7Year < CURRENT_YEAR) {
    under7Year = under7Year + 1;
    count++;
  }

  if (CURRENT_MONTH < 7) {
    count = count - 1;
  }

  const update_url = {
    label: `Under ${count + 7}'s`,
    slug: `under-${count + 7}`,
  };

  return update_url;
};

export const TEAM_URL = (year: Date, teamSlug?: string, page?: string) => {
  const TEAM_URL = [...TEAMS, UNDER(year).slug];

  return page
    ? [...TEAM_URL, teamSlug, page]
    : teamSlug
    ? [...TEAM_URL, teamSlug]
    : TEAM_URL;
};
