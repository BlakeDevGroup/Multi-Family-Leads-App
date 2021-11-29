import propertyData from "./prop2.json";
import * as MessageService from "../../common/message/message.service";
import { Property } from "./Property";
import { IQuery } from "../../common/query/IQuery";
import { ServerResponsePayload } from "../../common/message/message.service";

export default class PropertyJsonQuery implements IQuery {
  async readById(id: string): Promise<ServerResponsePayload> {
    return new Promise((resolve, reject) => {
      const data: any = propertyData.properties.filter(
        (property) => property["Property Address"] === id
      )[0];

      if (data) {
        resolve(
          MessageService.sendSuccess(
            "Successfully retrieved property",
            this.propertyFromData(data)
          )
        );
      } else {
        resolve(
          MessageService.sendFailure(
            `No property found with id: ${id}`,
            `EntityNotFoundError`,
            404
          )
        );
      }
    });
  }
  async list(): Promise<ServerResponsePayload> {
    return new Promise((resolve, reject) => {
      const data: Property[] = propertyData.properties.map((property) =>
        this.propertyFromData(property)
      );
      resolve(
        MessageService.sendSuccess("Successfully retrieved properties", data)
      );
    });
  }
  putById(id: string, resource: Property) {
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
      id: property.id,
      address: {
        street: property["Property Address"],
        city: property["Property City"],
        state: property["State"],
        zip_code: property["Zip Code"],
        county: "",
      },
      owner_id: "",
      owner_name: property["Contact Person"],
      owner_email: "",
      owner_number: "",
      price: 1,
      units: parseInt(property.Units),
      sqft: 0,
      buildings: 0,
      year_built: 0,
      notes: [],
    };
  }
}
