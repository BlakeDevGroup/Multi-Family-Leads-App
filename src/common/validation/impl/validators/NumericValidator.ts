import { IValidator } from "../../def/IValidator";
import { NumericValidationScope } from "../scopes/NumericValidationScope";

export class NumericValidator implements IValidator {
  scope: NumericValidationScope;

  constructor(scope: NumericValidationScope) {
    this.scope = scope;
  }

  validate(): boolean {
    return this.validateNumeric();
  }

  private validateNumeric(): boolean {
    return !isNaN(this.scope.number);
  }
}
