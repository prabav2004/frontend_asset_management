import axiosInstance from "./axiosConfig";

export function addCategory(data) {
  return axiosInstance.post("/categories", data);
}

export function getAllCategories() {
  return axiosInstance.get("/categories");
}

export function updateCategory(id, data) {
  return axiosInstance.put("/categories/" + id, data);
}

export function deleteCategory(id) {
  return axiosInstance.delete("/categories/" + id);
}