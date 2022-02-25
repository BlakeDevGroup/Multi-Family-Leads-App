import { ControlledInput } from "../../common/UI/Form/ControlledInput";
import { PhoneNumberInput } from "../../common/UI/Form/PhoneNumberInput";
import "./CreateAccountPage.css";

export default function CreateAccountPage() {
  return (
    <div className="create-account-container">
      <div className="create-account-input-container">
        <ControlledInput label="test" />
      </div>
    </div>
  );
}
