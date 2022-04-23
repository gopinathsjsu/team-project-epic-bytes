import axios from "axios";
import { signup_baseurl } from "./constants";

export const ApiInstance = axios.create({
  baseURL: signup_baseurl,
});
