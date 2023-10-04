interface IAddress  {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
   
  }
  interface IUsers {
    id: number;
    name: string;
    username: string;
    email: string;
    address: IAddress;
    phone: string;
    website: string;
  };

  export type {IUsers};