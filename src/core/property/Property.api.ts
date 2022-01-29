import { Property } from "./Property";
import Query from "./PropertyQuery";
import propertyData from "./properties.json";

export default class PropertyAPI {
  private query: Query = new Query();

  async get(id: string) {
    try {
      const payload = await this.query.readById(id);

      if (payload.data) {
        return payload.data;
      } else {
        return new Error(payload.message);
      }
    } catch (e: any) {
      return e;
    }
  }

  async put(id: string, resource: Property) {
    return this.query.putById(id, resource);
  }

  async create(resource: Property) {
    return this.query.create(resource);
  }

  async delete(id: string) {
    return this.query.deleteById(id);
  }

  async getAll() {
    try {
      const payload = await this.query.list();

      if (payload.data) {
        return payload.data;
      } else {
        return new Error(payload.message);
      }
    } catch (e: any) {
      return e;
    }
  }
}
