import { useLocation, Navigate } from "react-router";
import useAuth from "./useAuth";
import jwt from "jsonwebtoken";
export default function RequireAuth({ children }: { children: JSX.Element }) {
  let token: string = useAuth();
  let location = useLocation();

  if (token && jwt.verify(token, "42616896-e9e6-4fd7-80af-e0c1b325899b")) {
    return children;
  } else {
    return <Navigate to="/login" state={{ from: location }} />;
  }
}
