import { Official } from 'ui/src/lib/official/officials.interface';

export interface YearMetaData {
  slug: string;
  label: string;
}

export interface YearGroupCollection {
  year: Date;
  name: string;
  _id: string;
  teamsCollection: {
    items: TeamCollection[];
  };
}

export interface TeamCollection {
  slug: string;
  name: string;
}

export interface Team {
  slug: string;
  name: string;
  description: {
    json: Json;
  };
  image: {
    url: string;
    title: string;
    description: string;
  };
  officialsCollection: {
    items: Official[];
  };
  sponsorCollection: {
    items: {
      name: string;
      logo: {
        url: string;
        title: string;
        description: string;
      };
      domain: string;
    }[];
  };
}

export interface Json {
  data: any;
  content: {
    data: any;
    content: {
      data: any;
      marks: [];
      value: string;
      nodeType: 'text';
    }[];
    nodeType: 'paragraph';
  }[];
  nodeType: 'document';
}
