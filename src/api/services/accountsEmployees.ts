import axios from "@/api/config/axios.config";
import { IChangePasswordAccountsEmployees } from "@/modules/interfaces/IAccountsEmployees";

export const accountsEmployeesApi = {
  //   create: (payload: IAccountsStudents) =>
  //     axios.post("/account-employees", payload),

  changePassword: (payload: IChangePasswordAccountsEmployees) =>
    axios.patch("/account-employees/change-password", payload),

  delete: (id: string) => axios.delete(`/account-employees/${id}`),

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
