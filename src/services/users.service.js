import axios from "axios";
import { apiURL } from "../app/config";

class UsersService {
    getAll() {
      return axios.get(apiURL + "users");
    }
  
    get(id) {
      return axios.get(`${apiURL}users/${id}`);
    }
  
    create(data) {
      return axios.post(apiURL + "/users", data);
    }
  
    update(id, data) {
      return axios.put(`${apiURL}users/${id}`, data);
    }
  
    delete(id) {
      return axios.delete(`${apiURL}users/${id}`);
    }
  
    deleteAll() {
      return axios.delete(`${apiURL}users`);
    }
  
    findByTitle(title) {
      return axios.get(`${apiURL}users?title=${title}`);
    }
  }
  
  export default new UsersService();