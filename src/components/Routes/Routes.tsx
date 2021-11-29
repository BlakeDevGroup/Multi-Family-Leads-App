import { Routes, Route } from "react-router";
import DataTableComponent from "../DataTable/DataTable";
import LoginPage from "../LoginPage/LoginPage";
import Owner from "../Owner/Owner";

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<DataTableComponent />} />
      <Route path="Owner" element={<Owner />} />
      <Route path="Login" element={<LoginPage />} />
    </Routes>
  );
}
