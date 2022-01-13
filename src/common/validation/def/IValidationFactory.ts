import { IValidator } from "./IValidator";
import { ValidationScope } from "./ValidationScope";

export interface IValidationFactory {
  createValidator(scope: ValidationScope): IValidator | null;
}
