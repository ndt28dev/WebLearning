import axios from "@/api/config/axios.config";
import { IEmployees } from "@/modules/interfaces/IEmployees";

export const employeeApi = {
  // CRUD cơ bản
  create: (payload: IEmployees) => axios.post("/employees", payload),

  update: (payload: IEmployees) => axios.patch("/employees", payload),

  hide: (id: string) => axios.patch(`/employees/${id}/hide`),

  restore: (id: string) => axios.patch(`/employees/${id}/restore`),

  hideMany: (ids: string[]) => axios.patch("/employees/hide-many", { ids }),

  restoreMany: (ids: string[]) =>
    axios.patch("/employees/restore-many", { ids }),

  delete: (id: string) => axios.delete(`/employees/${id}`),

  deleteMany: (ids: string[]) => axios.delete("/employees", { data: { ids } }),

  importExcel: (formData: FormData) =>
    axios.post("/employees/import", formData),

  exportExcel: async (): Promise<Blob> => {
    const res = await axios.post(
      "/employees/export",
      {},
      {
        responseType: "blob",
      }
    );

    return res.data;
  },
};
