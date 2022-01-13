import { ValidationScope } from "../../def/ValidationScope";

export class EmailValidationScope extends ValidationScope {
  email: string;
  constructor(email: string) {
    super();
    this.email = email;
  }
}
