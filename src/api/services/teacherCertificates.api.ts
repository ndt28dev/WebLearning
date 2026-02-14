import axios from "@/api/config/axios.config";

export const teacherCertificatesApi = {
  // CRUD cơ bản
  create: (payload: any) => axios.post("/certificates-teacher", payload),

  update: (payload: any) => axios.patch("/certificates-teacher", payload),

  delete: (id: string) => axios.delete(`/certificates-teacher/${id}`),

  updateVerification: (id: string) =>
    axios.patch(`/certificates-teacher/verification/${id}`),

  accept: (id: string) => axios.patch(`/certificates-teacher/accept/${id}`),

  cancel: (id: string, reason: string) =>
    axios.patch(`/certificates-teacher/cancel/${id}`, {
      reason,
    }),
};
