import { IQuery } from "../../common/query/IQuery";
import axios from "axios";
import * as MessageService from "../../common/message/message.service";
import { Note } from "./Note";

export default class NoteQuery implements IQuery {
  query;
  constructor() {
    this.query = axios.create({
      baseURL: "http//localhost:3500/note",
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
    const result = await this.query.get("/");
    return MessageService.sendSuccess(
      "Seccessfully retrieved notes",
      result.data
    );
  }
  async create(resource: Note) {
    const result = await this.query.post("/", resource);
    return MessageService.sendSuccess(
      "Successfully created note",
      result.data
    );
  }
  async putById(id: string, resource: Note) {
    const result = await this.query.put(`/${id}`, resource);
    return MessageService.sendSuccess("Successfully updated note", result.data);
  }
  async deleteById(id: string) {
    const result = await this.query.delete(`/${id}`);
    return MessageService.sendSuccess(
      "Successfully deleted note",
      result.data
    );
  }
}
