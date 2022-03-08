import { IQuery } from "../../common/query/IQuery";
import axios, { AxiosError } from "axios";
import * as MessageService from "../../common/message/message.service";
import { User } from "./User";
import { throws } from "assert";

export default class UserQuery implements IQuery {
  query;
  constructor() {
    this.query = axios.create({
      baseURL:
        process.env.NODE_ENV == "production"
          ? "https://multi-family-service.herokuapp.com/auth"
          : "http://localhost:3500/auth",
    });
  }

  async readById(id: string): Promise<any> {
    const result = await this.query.get(`/${id}`);
    if (result.data) {
      return MessageService.sendSuccess(
        "Successfully retrieved user",
        result.data
      );
    } else {
      return MessageService.sendFailure(
        `No user found with id: ${id}`,
        `EntityNotFoundError`,
        404
      );
    }
  }

  async list() {
    const result = await this.query.get("/");
    return MessageService.sendSuccess(
      "Successfully retrieved users",
      result.data
    );
  }

  async putById(id: string, resource: User) {
    const result = await this.query.put(`/${id}`, resource);
    return MessageService.sendSuccess("Successfully updated user", result.data);
  }

  async create(resource: User) {
    try {
      const result = await this.query.post("/create", resource);
      console.log(resource);
      console.log(result.data);
      return MessageService.sendSuccess(
        "Successfully created user",
        result.data
      );
    } catch (e: any) {
      console.log(e);
      if (e.response?.data) {
        return MessageService.sendFailure(
          e.response.data.error.message,
          e.response.data,
          400
        );
      } else {
        return MessageService.sendFailure(e.message, e, 500);
      }
    }

    // console.log(result.data);
  }

  async deleteById(id: string) {
    const result = await this.query.delete(`/${id}`);
    return MessageService.sendSuccess("Successfullt deleted user", result.data);
  }
}
