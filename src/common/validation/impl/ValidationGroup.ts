import { IValidationGroup } from "../def/IValidationGroup";
import { IValidator } from "../def/IValidator";
import { ValidationScope } from "../def/ValidationScope";

export class ValidationGroup implements IValidationGroup {
  scopes: ValidationScope[];
  id: string;

  constructor(id: string) {
    this.id = id;
    this.scopes = [];
  }

  AddScope(scope: ValidationScope): ValidationScope {
    this.scopes.push(scope);
    return scope;
  }

  RemoveScope(scope: ValidationScope): void {
    this.scopes.filter((element) => scope !== element);
  }
}
