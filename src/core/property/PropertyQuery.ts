import { IQuery } from "../../common/query/IQuery";
import axios from "axios";
import * as MessageService from "../../common/message/message.service";
import { Property } from "./Property";

export default class PropertyQuery implements IQuery {
  query;
  constructor() {
    this.query = axios.create({
      baseURL:
        process.env.NODE_ENV == "production"
          ? "http://localhost:3500/property"
          : "http://localhost:3500/property",
    });
  }
  async readById(id: string): Promise<any> {
    const result = await this.query.get(`/${id}`);
    if (result.data) {
      return MessageService.sendSuccess(
        "Successfully retrieved property",
        result.data
      );
    } else {
      return MessageService.sendFailure(
        `No property found with id: ${id}`,
        `EntityNotFoundError`,
        404
      );
    }
  }
  async list() {
    const result = await this.query.get("/");
    return MessageService.sendSuccess(
      "Successfully retrieved properties",
      result.data
    );
  }
  async create(resource: Property) {
    const result = await this.query.post("/", resource);
    return MessageService.sendSuccess(
      "Successfully created property",
      result.data
    );
  }

  async putById(id: string, resource: Property) {
    const result = await this.query.put(`/${id}`, resource);
    return MessageService.sendSuccess(
      "Successfully updated property",
      result.data
    );
  }
  async deleteById(id: string) {
    const result = await this.query.delete(`/${id}`);
    return MessageService.sendSuccess(
      "Successfully deleted property",
      result.data
    );
  }
}
