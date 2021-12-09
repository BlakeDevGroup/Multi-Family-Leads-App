import { Routes, Route } from "react-router";
import DataTableComponent from "../DataTable/DataTable";
import LoginPage from "../LoginPage/LoginPage";
import Owner from "../Owner/Owner";
import useAuth from "./useAuth";
import RequireAuth from "./RequireAuth";
export default function Router() {
  const auth = useAuth();

  return (
    <Routes>
      <Route
        path="/"
        element={
          <RequireAuth>
            <DataTableComponent />
          </RequireAuth>
        }
      />
      <Route
        path="owner"
        element={
          <RequireAuth>
            <Owner />
          </RequireAuth>
        }
      />
      <Route path="login" element={<LoginPage />} />
    </Routes>
  );
}
