import axios from "axios";

export const API_BASE_URL = "http://localhost:8080";
export const jwt = localStorage.getItem("jwt");
console.log("jwt", jwt);

export const api = axios.create({
  baseURL: API_BASE_URL,
});
