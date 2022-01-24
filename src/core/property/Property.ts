import { Address } from "../address/Address";

export type Property = {
  id?: string;
  street: string;
  city: string;
  state: string;
  zip_code: string;
  owner_name: string;
  owner_email: string;
  owner_entity: string;
  owner_number: string;
  units: number;
  purchase_price: number;
  purchase_date: string;
};
