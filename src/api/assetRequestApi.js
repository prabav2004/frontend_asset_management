import axiosInstance from "./axiosConfig";

export function requestAsset(data) {
  return axiosInstance.post("/asset-requests", data);
}

export function getAllAssetRequests() {
  return axiosInstance.get("/asset-requests");
}

export function getEmployeeAssetRequests(userId) {
  return axiosInstance.get("/asset-requests/employee/" + userId);
}

export function approveAssetRequest(requestId) {
  return axiosInstance.put("/asset-requests/" + requestId + "/approve");
}

export function rejectAssetRequest(requestId) {
  return axiosInstance.put("/asset-requests/" + requestId + "/reject");
}

export function returnAsset(assetId) {
  return axiosInstance.put("/asset-requests/return/" + assetId);
}