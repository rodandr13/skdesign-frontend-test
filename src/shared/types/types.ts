export type Address = {
  streetAddress: string;
  city: string;
  state: string;
  zip: string;
};

export type Person = {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  address: Address;
  description: string;
};
