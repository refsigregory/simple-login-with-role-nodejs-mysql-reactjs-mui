import axios from "axios";
import { apiURL } from "../app/config";

export const authLogin = async ({username, password}) => {
    return await axios
      .post(apiURL + 'auth/signin', {
        username: username,
        password: password,
      })
      .then((response) => {
        return response.data;
      }).catch((err) => {
        return err
      });
  }