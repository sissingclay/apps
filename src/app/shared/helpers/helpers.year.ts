import { TEAMS } from '@apps/ui';

export const UNDER = (year: string) => {
  const DATE = new Date();
  const CURRENT_YEAR = DATE.getFullYear();
  const CURRENT_MONTH = DATE.getMonth();
  let under7Year = parseInt(year.substring(0, 4), 10);
  let count = 0;

  while (under7Year < CURRENT_YEAR) {
    under7Year = under7Year + 1;
    count++;
  }

  if (CURRENT_MONTH < 7) {
    count = count - 1;
  }

  return { label: `Under ${count + 7}'s`, slug: `under-${count + 7}` };
};

export const TEAM_URL = (year: string, slug: string) => [
  ...TEAMS,
  year,
  slug,
  'detail',
];
