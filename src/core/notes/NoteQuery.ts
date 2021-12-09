import { IQuery } from "../../common/query/IQuery";
import axios from "axios";
import * as MessageService from "../../common/message/message.service";
import { Note } from "./Note";

export default class NoteQuery implements IQuery {
  query;
  constructor() {
    this.query = axios.create({
      baseURL:
        process.env.NODE_ENV == "production"
          ? "http://localhost:3500"
          : "http://localhost:3500",
    });
  }
  async readById(id: string): Promise<any> {
    const result = await this.query.get(`/${id}`);
    if (result.data) {
      return MessageService.sendSuccess(
        "Successfully retrieved note",
        result.data
      );
    } else {
      return MessageService.sendFailure(
        `No note found with id: ${id}`,
        "EntityNotFoundError",
        404
      );
    }
  }
  async list() {
    const result = await this.query.get(`/note`);
    return MessageService.sendSuccess(
      "Seccessfully retrieved notes",
      result.data
    );
  }
  async create(resource: Note) {
    const result = await this.query.post(
      `/property/${resource.property_id}/note`,
      resource
    );
    return MessageService.sendSuccess("Successfully created note", result.data);
  }
  async putById(id: string, resource: Note) {
    const result = await this.query.put(
      `/property/${resource.property_id}/note/${id}`,
      resource
    );
    return MessageService.sendSuccess("Successfully updated note", result.data);
  }
  async deleteById(id: string) {
    // const result = await this.query.delete(`/property/${resource.property_id}/note/${id}`);
    // return MessageService.sendSuccess("Successfully deleted note", result.data);
    throw new Error("Not Implemented");
  }

  async deleteByID(property_id: string, id: string) {
    const result = await this.query.delete(
      `/property/${property_id}/note/${id}`
    );
    return MessageService.sendSuccess("Successfully deleted note", result.data);
  }
}
