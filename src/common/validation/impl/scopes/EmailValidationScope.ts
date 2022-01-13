import { ValidationScope } from "../../def/ValidationScope";

export class EmailValidationScope extends ValidationScope {
  email: string;
  canBeEmpty: boolean;
  constructor(email: string, canBeEmpty: boolean = true) {
    super();
    this.email = email;
    this.canBeEmpty = canBeEmpty;
  }
}
