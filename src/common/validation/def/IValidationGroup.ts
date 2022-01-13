import { ValidationScope } from "./ValidationScope";

export interface IValidationGroup {
  scopes: ValidationScope[];
  id: string;

  AddScope(scope: ValidationScope): ValidationScope;

  RemoveScope(scope: ValidationScope): void;
}
