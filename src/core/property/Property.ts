import { Address } from "../address/Address";

export type Property = {
  id?: string;
  address: Address;
  owner_name: string;
  owner_email: string;
  owner_number: string;
  units: number;
  notes: string[];
};
