import { IValidator } from "./IValidator";
import { ValidationScope } from "./ValidationScope";

export interface IValidationBroker {
  //   CreateValidator(scope: ValidationScope): IValidator;
  //   CreateAndAssignValidator(scope: ValidationScope, id: string): IValidator;
  //   ValidateGroup(id: string): boolean;
  validate(scope: ValidationScope): boolean;

  addScopeToGroup(scope: ValidationScope, id: string): ValidationScope;

  removeScopeFromGroup(scope: ValidationScope, id: string): void;

  validateGroup(id: string): boolean;
}
