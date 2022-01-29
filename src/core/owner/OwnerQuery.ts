import { IQuery } from "../../common/query/IQuery";
import axios from "axios";
import * as MessageService from "../../common/message/message.service"
import { Owner } from "./Owner";

export default class OwnerQuery implements IQuery {
    query;
    constructor() {
        this.query = axios.create({
            baseURL:
                process.env.NODE_ENV == "production"
                ? "https://multi-family-service.herokuapp.com/owner"
                : "http://localhost:3500/owner",
        });
    }
    async readById(id: string): Promise<any> {
        const result = await this.query.get(`/${id}`);
        if (result.data) {
            return MessageService.sendSuccess(
              "Successfully retrieved owner",
              result.data
            );
          } else {
            return MessageService.sendFailure(
              `No owner found with id: ${id}`,
              `EntityNotFoundError`,
              404
            );
          }
        }
        async list() {
            const result = await this.query.get("/");
            return MessageService.sendSuccess(
              "Successfully retrieved owners",
              result.data
            );
          }
          async create(resource: Owner) {
            const result = await this.query.post("/", resource);
            return MessageService.sendSuccess(
              "Successfully created owner",
              result.data
            );
          }
        
          async putById(id: string, resource: Owner) {
            const result = await this.query.put(`/${id}`, resource);
            return MessageService.sendSuccess(
              "Successfully updated owner",
              result.data
            );
          }
          async deleteById(id: string) {
            const result = await this.query.delete(`/${id}`);
            return MessageService.sendSuccess(
              "Successfully deleted owner",
              result.data
            );
          }
}