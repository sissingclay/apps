export interface Official {
  phoneNumber: string;
  name: string;
  responsibilities?: string;
  impact?: string;
  commiteeType?: string[];
  image: {
    url: string;
    title: string;
    description: string;
  };
  type: string;
  emailAddress: string;
}
