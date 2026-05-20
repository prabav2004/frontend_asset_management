import axiosInstance from "./axiosConfig";

export function addAsset(data) {
  return axiosInstance.post("/assets", data);
}

export function getAllAssets() {
  return axiosInstance.get("/assets");
}

export function getAssetById(id) {
  return axiosInstance.get("/assets/" + id);
}

export function getAvailableAssets() {
  return axiosInstance.get("/assets/available");
}

export function searchAssets(keyword) {
  return axiosInstance.get("/assets/search?keyword=" + keyword);
}

export function getAssetsByCategory(categoryId) {
  return axiosInstance.get("/assets/category/" + categoryId);
}

export function updateAsset(id, data) {
  return axiosInstance.put("/assets/" + id, data);
}

export function deleteAsset(id) {
  return axiosInstance.delete("/assets/" + id);
}