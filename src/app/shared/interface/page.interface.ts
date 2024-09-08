import { Official } from 'ui/src/lib/official/officials.interface';

export interface PageData {
  title: string;
  slug: string;
  officialCollection: {
    items: Official[];
  };
}

export interface Value {
  image: {
    url: string;
    title: string;
    description: string;
  };
  details: string;
}
