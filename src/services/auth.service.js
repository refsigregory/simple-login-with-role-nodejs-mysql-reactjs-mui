import axios from "axios";

const baseURL = "http://localhost:3001/api/";

export const authLogin = async ({username, password}) => {
    return await axios
      .post(baseURL + 'auth/signin', {
        username: username,
        password: password,
      })
      .then((response) => {
        return response.data;
      }).catch((err) => {
        return err
      });
  }