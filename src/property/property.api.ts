import { Property } from "./Property";
import Query from "./PropertyJsonQuery";
import propertyData from "./properties.json";

export default class PropertyAPI {
  private query: Query = new Query();

  get(id: string) {
    return this.query.readById(id);
  }
  getAll() {
    return this.query.list();
  }
  put(resource: Property) {
    return this.query.putById(resource);
  }
  create(resource: Property) {
    return this.query.create(resource);
  }
  delete(id: string) {
    return this.query.deleteById(id);
  }
}
