import { useSelector } from "react-redux";

export default function useAuth() {
  return useSelector((state: any) => state.auth.token);
}
