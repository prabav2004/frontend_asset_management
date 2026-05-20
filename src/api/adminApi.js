import axiosInstance from "./axiosConfig";

export function getAllEmployees() {
  return axiosInstance.get("/admin/employees");
}

export function deleteEmployee(id) {
  return axiosInstance.delete("/admin/employees/" + id);
}

export function getAssignedAssets() {
  return axiosInstance.get("/admin/assigned-assets");
}

export function getEmployeeAllocatedAssets(userId) {
  return axiosInstance.get("/admin/employees/" + userId + "/assets");
}

export function getMyAllocatedAssets(userId) {
  return axiosInstance.get("/employee/" + userId + "/allocated-assets");
}