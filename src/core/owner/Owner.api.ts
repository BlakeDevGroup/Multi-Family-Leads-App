import { Owner } from "./Owner";
import Query from "./OwnerQuery";

export default class OwnerAPI {
  private query: Query = new Query();

  async get(owner_id: string) {
    try {
      const payload = await this.query.readById(owner_id);

      if (payload.data) {
        return payload.data;
      } else {
        return new Error(payload.message);
      }
    } catch (e: any) {
      return e;
    }
  }

  async put(owner_id: string, resource: Owner) {
    return this.query.putById(owner_id, resource);
  }

  async create(resource: Owner) {
    return this.query.create(resource);
  }

  async delete(owner_id: string) {
    return this.query.deleteById(owner_id);
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

  async getProperties(owner_id: string) {
    try {
      const payload = await this.query.getPropertiesByOwnerId(owner_id);

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
