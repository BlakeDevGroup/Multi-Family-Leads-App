import { IQuery } from "../../common/query/IQuery";
import axios from "axios";
import * as MessageService from "../../common/message/message.service";
import { Property } from "./Property";
import { StringDecoder } from "string_decoder";

export default class PropertyQuery implements IQuery {
  query;
  constructor() {
    this.query = axios.create({
      baseURL: "http://localhost:3500/property",
    });
  }
  async readById(id: string): Promise<any> {
    const data = await this.query.get(`/${id}`);
    if (data) {
      return MessageService.sendSuccess(
        "Successfully retrieved property",
        data
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
    const data = await this.query.get("/");
    return MessageService.sendSuccess(
      "Successfully retrieved properties",
      data
    );
  }
  async create(resource: Property) {
    const data = await this.query.post("/", resource);
    return MessageService.sendSuccess("Successfully created property", data);
  }

  async putById(id: string, resource: Property) {
    const data = await this.query.put(`/${id}`, resource);
    return MessageService.sendSuccess("Successfully updated property", data);
  }
  async deleteById(id: string) {
    const data = await this.query.delete(`/${id}`);
    return MessageService.sendSuccess("Successfully deleted property", data);
  }
}
