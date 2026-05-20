import axiosInstance from "./axiosConfig";

// Admin sends audits to employees
export function sendAuditToAllEmployees() {
  return axiosInstance.post("/audits/send");
}

// Admin gets all audits
export function getAllAudits() {
  return axiosInstance.get("/audits");
}

// Employee gets own audits
export function getEmployeeAudits(userId) {
  return axiosInstance.get("/audits/employee/" + userId);
}

// Employee submits remarks
export function submitEmployeeAuditRemarks(id, remarks) {
  return axiosInstance.put(
    "/audits/" + id + "/employee-remarks",
    null,
    {
      params: {
        remarks: remarks,
      },
    }
  );
}

// Admin verifies audit
export function verifyAudit(id, remarks) {
  return axiosInstance.put(
    "/audits/" + id + "/verify",
    null,
    {
      params: {
        remarks: remarks,
      },
    }
  );
}

// Admin rejects audit
export function rejectAudit(id, remarks) {
  return axiosInstance.put(
    "/audits/" + id + "/reject",
    null,
    {
      params: {
        remarks: remarks,
      },
    }
  );
}

// Admin updates remarks only
export function updateAdminRemarks(id, remarks) {
  return axiosInstance.put(
    "/audits/" + id + "/admin-remarks",
    null,
    {
      params: {
        remarks: remarks,
      },
    }
  );
}