import { Official } from 'ui/src/lib/official/officials.interface';

export interface PageData {
  title: string;
  slug: string;
  content: any;
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

export interface IOfficials {
  data: { officialsCollection: { items: Official[] } };
}
