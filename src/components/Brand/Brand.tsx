import CompanyLogo from "../../static/Brand.png";
import "./Brand.css";

export function Brand() {
  return (
    <div className="logo-wrapper">
      <img
        className="logo-styles"
        src={CompanyLogo}
        alt="Central Valley Logo"
      ></img>
    </div>
  );
}
