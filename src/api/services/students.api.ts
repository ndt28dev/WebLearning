import axios from "@/api/config/axios.config";

export const studentApi = {
  // CRUD cơ bản
  create: (payload: any) => axios.post("/students", payload),

  update: (payload: any) => axios.patch("/students", payload),

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
