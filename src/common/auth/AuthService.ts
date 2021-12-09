import axios from "axios";
import { sendSuccess, sendFailure } from "../message/message.service";

export default class AuthService {
  async login(username, password) {
    const result = await axios.post("http://localhost:3500/login", {
      user_name: username,
      password: password,
    });

    if (result.data.error) {
      return sendFailure(
        result.data.error,
        "UserNotFoundError",
        result.data.status
      );
    }

    return sendSuccess("Successfully authenticated user", result.data);
  }
}
