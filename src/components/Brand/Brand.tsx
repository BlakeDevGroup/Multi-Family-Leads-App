import CompanyLogo from "../../static/Brand.png";
import "./Brand.css";

export function Brand(props) {
  return (
    <div className="logo-wrapper">
      <img
        className={props.sizing}
        src={CompanyLogo}
        alt="Central Valley Logo"
      ></img>
    </div>
  );
}
