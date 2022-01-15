import { ValidationScope } from "./ValidationScope";

export interface IValidator {
  scope: ValidationScope;
  validate(): boolean;
}
