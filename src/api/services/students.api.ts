import axios from "@/api/config/axios.config";
import { IStudents } from "@/modules/interface/IStudents";

export const studentApi = {
  // CRUD cơ bản
  create: (payload: IStudents) => axios.post("/students", payload),

  update: (payload: IStudents) => axios.patch("/students", payload),

  hide: (id: string) => axios.patch(`/students/${id}/hide`),

  restore: (id: string) => axios.patch(`/students/${id}/restore`),

  hideMany: (ids: string[]) => axios.patch("/students/hide-many", { ids }),

  restoreMany: (ids: string[]) =>
    axios.patch("/students/restore-many", { ids }),

  delete: (id: string) => axios.delete(`/students/${id}`),

  deleteMany: (ids: string[]) => axios.delete("/students", { data: { ids } }),

  importExcel: (formData: FormData) => axios.post("/students/import", formData),

  exportExcel: async (): Promise<Blob> => {
    const res = await axios.post(
      "/students/export",
      {},
      {
        responseType: "blob",
      }
    );

    return res.data;
  },
};
