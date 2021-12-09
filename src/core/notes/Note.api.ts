import { Note } from "./Note";
import Query from "./NoteQuery";

export default class NoteApi {
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

  async put(id: string, resource: Note) {
    return this.query.putById(id, resource);
  }
  async create(resource: Note) {
    return this.query.create(resource);
  }
  async delete(property_id: string, id: string) {
    return this.query.deleteByID(property_id, id);
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
