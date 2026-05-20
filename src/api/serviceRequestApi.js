import axiosInstance from "./axiosConfig";

export function raiseServiceRequest(data) {
  return axiosInstance.post("/service-requests", data);
}

export function getAllServiceRequests() {
  return axiosInstance.get("/service-requests");
}

export function getEmployeeServiceRequests(userId) {
  return axiosInstance.get("/service-requests/employee/" + userId);
}

export function updateServiceRequestStatus(id, status, remarks) {
  return axiosInstance.put("/service-requests/" + id + "/status", null, {
    params: {
      status: status,
      remarks: remarks,
    },
  });
}

