import { ValidationScope } from "../../def/ValidationScope";

export class NumericValidationScope extends ValidationScope {
  number: number;
  constructor(number: number) {
    super();
    this.number = number;
  }
}
