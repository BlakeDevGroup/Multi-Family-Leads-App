import propertyData from "./properties.json";
import * as MessageService from "../common/message/message.service";
import { Property } from "./Property";
import { IQuery } from "../common/query/IQuery";

export default class PropertyJsonQuery implements IQuery {
  readById(id: string) {
    try {
      const data: any = propertyData.properties.filter(
        (property) => property.apn === id
      )[0];

      if (data) {
        return MessageService.sendSuccess(
          "Successfully retrieved property",
          this.propertyFromData(data),
          200
        );
      } else {
        const ERROR_MESSAGE = `No property found with id: ${id}`;
        return MessageService.sendFailure(
          ERROR_MESSAGE,
          new Error(ERROR_MESSAGE),
          404
        );
      }
    } catch (e: any) {
      return MessageService.sendFailure(e.message, e, 500);
    }
  }
  list() {
    try {
      const data: Property[] = propertyData.properties.map((property) =>
        this.propertyFromData(property)
      );
      return MessageService.sendSuccess(
        "Successfully retrieved properties",
        data,
        200
      );
    } catch (e: any) {
      return MessageService.sendFailure(e.message, e, 500);
    }
  }
  putById(resource: Property) {
    return true;
  }
  create(resource: Property) {
    return true;
  }
  deleteById(id: string) {
    return true;
  }

  private propertyFromData(property: any): Property {
    return {
      property_id: property.apn,
      address: {
        street: property.address_line_1,
        city: property.address_city,
        state: property.address_state,
        zip_code: property.address_postal_code,
        county: property.county,
      },
      owner_id: "",
      owner_name: "",
      owner_email: "",
      owner_number: "",
      price: 1,
      units: parseInt(property.total_units),
      sqft: parseInt(property.gross_building_area),
      buildings: parseInt(property.total_buildings),
      year_built: parseInt(property.year_built),
      notes: [],
    };
  }
}
