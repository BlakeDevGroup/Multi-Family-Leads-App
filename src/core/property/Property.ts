import { Address } from "../address/Address";

export interface Property {
  property_id: string;
  address: Address;
  owner_id: string;
  owner_name: string;
  owner_email: string;
  owner_number: string;
  price: number;
  units: number;
  sqft: number;
  buildings: number;
  year_built: number;
  notes: string[];
}
