import CompanyLogo from "../../static/Brand.png";
import "./Brand.css";

export function Brand(props) {
  return (
    <div className={props.wrapper}>
      <img
        className={props.sizing}
        src={CompanyLogo}
        alt="Central Valley Property Advisors Logo"
      ></img>
    </div>
  );
}
