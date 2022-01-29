import { ids } from "webpack";
import { IValidationBroker } from "../def/IValidationBroker";
import { IValidationFactory } from "../def/IValidationFactory";
import { IValidationGroup } from "../def/IValidationGroup";
import { IValidator } from "../def/IValidator";
import { ValidationScope } from "../def/ValidationScope";
import { ValidationFactory } from "./ValidationFactory";
import { ValidationGroup } from "./ValidationGroup";

class ValidationBroker implements IValidationBroker {
  private validationFactory: IValidationFactory;
  private validationGroups: IValidationGroup[];

  constructor() {
    this.validationFactory = new ValidationFactory();
    this.validationGroups = [];
  }

  addScopeToGroup(scope: ValidationScope, id: string): ValidationScope {
    return this.getOrCreateValidationGroup(id).AddScope(scope);
  }

  removeScopeFromGroup(scope: ValidationScope, id: string): void {
    return this.getOrCreateValidationGroup(id).RemoveScope(scope);
  }

  validateGroup(id: string): boolean {
    const validationGroup = this.getOrCreateValidationGroup(id);

    for (let i = 0; i < validationGroup.scopes.length; i++) {
      if (!this.validate(validationGroup.scopes[i])) return false;
    }

    return true;
  }

  validate(scope: ValidationScope): boolean {
    return this.validationFactory.createValidator(scope)?.validate() || false;
  }

  private getOrCreateValidationGroup(id: string): IValidationGroup {
    for (let i = 0; i < this.validationGroups.length; i++) {
      if (this.validationGroups[i].id === id) return this.validationGroups[i];
    }

    return new ValidationGroup(id);
  }
}

export default new ValidationBroker();
