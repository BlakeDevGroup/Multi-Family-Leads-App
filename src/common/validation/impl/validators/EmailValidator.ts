import { IValidator } from "../../def/IValidator";
import { EmailValidationScope } from "../scopes/EmailValidationScope";

export class EmailValidator implements IValidator {
  scope: EmailValidationScope;
  constructor(scope: EmailValidationScope) {
    this.scope = scope;
  }

  validate(): boolean {
    return this.isEmpty() || this.validateEmail();
  }

  private validateEmail(): boolean {
    return !!String(this.scope.email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  }

  private isEmpty(): boolean {
    return (
      this.scope.canBeEmpty && [undefined, null, ""].includes(this.scope.email)
    );
  }
}
