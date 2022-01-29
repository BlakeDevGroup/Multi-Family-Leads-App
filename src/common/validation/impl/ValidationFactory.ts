import { IValidationFactory } from "../def/IValidationFactory";
import { IValidator } from "../def/IValidator";
import { ValidationScope } from "../def/ValidationScope";
import { EmailValidationScope } from "./scopes/EmailValidationScope";
import { NumericValidationScope } from "./scopes/NumericValidationScope";
import { EmailValidator } from "./validators/EmailValidator";
import { NumericValidator } from "./validators/NumericValidator";

export class ValidationFactory implements IValidationFactory {
  createValidator(scope: ValidationScope): IValidator | null {
    if (scope instanceof EmailValidationScope) {
      return new EmailValidator(scope);
    } else if (scope instanceof NumericValidationScope) {
      return new NumericValidator(scope);
    }

    return null;
  }
}
