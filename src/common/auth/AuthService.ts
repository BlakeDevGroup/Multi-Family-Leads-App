import axios from "axios";
import { sendSuccess, sendFailure } from "../message/message.service";
import Cookies from "universal-cookie";

export default class jAuthService {
  async login(email, password) {
    const result = await axios.post(
      process.env.NODE_ENV == "production"
        ? "https://multi-family-service.herokuapp.com/auth"
        : "http://localhost:3500/auth",
      {
        email: email,
        password: password,
      }
    );

    if (result.data.error) {
      return sendFailure(
        result.data.error,
        "UserNotFoundError",
        result.data.status
      );
    }
    new Cookies().set("token", result.data);

    return sendSuccess("Successfully authenticated user", result.data);
  }

  async logout() {
    new Cookies().remove("token");
  }
}
