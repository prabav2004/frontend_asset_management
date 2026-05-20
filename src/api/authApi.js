import axiosInstance from "./axiosConfig";

export function registerUser(data) {
  return axiosInstance.post("/auth/register", data);
}

export function loginUser(data) {
  return axiosInstance.post("/auth/login", data);
}