export interface HomeCollection {
  homeCollection: {
    items: {
      heroImage: {
        url: string;
        title: string;
        description: string;
      };
      hero: {
        json: any;
      };
    }[];
  };
}
