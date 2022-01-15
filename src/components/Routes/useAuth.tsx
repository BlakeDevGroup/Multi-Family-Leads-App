import { useSelector } from "react-redux";
import Cookies from "universal-cookie";

export default function useAuth() {
  const token = useSelector((state: any) => state.auth.token);

  return new Cookies().get("token") || token;
}
