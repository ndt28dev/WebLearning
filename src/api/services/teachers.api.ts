import axios from "@/api/config/axios.config";
import { ITeachers } from "@/modules/interfaces/ITeachers";

export const teacherApi = {
  // CRUD cơ bản
  create: (payload: ITeachers) => axios.post("/teachers", payload),

  update: (payload: ITeachers) => axios.patch("/teachers", payload),

  hide: (id: string) => axios.patch(`/teachers/${id}/hide`),

  restore: (id: string) => axios.patch(`/teachers/${id}/restore`),

  hideMany: (ids: string[]) => axios.patch("/teachers/hide-many", { ids }),

  restoreMany: (ids: string[]) =>
    axios.patch("/teachers/restore-many", { ids }),

  delete: (id: string) => axios.delete(`/teachers/${id}`),

  deleteMany: (ids: string[]) => axios.delete("/teachers", { data: { ids } }),

  importExcel: (formData: FormData) => axios.post("/teachers/import", formData),

  exportExcel: async (): Promise<Blob> => {
    const res = await axios.post(
      "/teachers/export",
      {},
      {
        responseType: "blob",
      }
    );

    return res.data;
  },
};
