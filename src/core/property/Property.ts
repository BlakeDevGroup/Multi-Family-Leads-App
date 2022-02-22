import { Address } from "../address/Address";

export type Property = {
  id?: string;
  street: string;
  city: string;
  state: string;
  zip_code: string;
  owner_id?: string;
  name?: string;
  email?: string;
  entity?: string;
  number?: string;
  units?: number;
  purchase_price?: number;
  purchase_date?: number;
};
