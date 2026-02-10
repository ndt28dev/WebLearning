import axios from "@/api/config/axios.config";
import { IRoles } from "@/modules/interfaces/IRoles";

export const rolesApi = {
  create: (payload: IRoles) => axios.post("/roles", payload),

  update: (payload: IRoles) => axios.patch("/roles", payload),

  delete: (id: string) => axios.delete(`/roles/${id}`),

  // importExcel: (formData: FormData) => axios.post("/roles/import", formData),

  // exportExcel: async (): Promise<Blob> => {
  //   const res = await axios.post(
  //     "/roles/export",
  //     {},
  //     {
  //       responseType: "blob",
  //     }
  //   );

  //   return res.data;
  // },
};
