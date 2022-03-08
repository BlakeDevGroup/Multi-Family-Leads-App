import { useDispatch, useSelector } from "react-redux";
import Cookies from "universal-cookie";
import { getUser } from "../../common/auth/AuthSlice";

export default function useUser() {
  const user = useSelector((state: any) => state.auth.user);
  const dispatch = useDispatch();

  if (!user.email) dispatch(getUser(new Cookies().get("token")));

  console.log(user);
  return user;
}
