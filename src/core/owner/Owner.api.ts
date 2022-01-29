import { Owner } from "./Owner";
import Query from "./OwnerQuery"

export default class OwnerAPI {
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
    
      async put(id: string, resource: Owner) {
        return this.query.putById(id, resource);
      }
    
      async create(resource: Owner) {
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