import axios from "@/api/config/axios.config";
import {
  IAccountsStudents,
  IChangePasswordAccountsStudents,
} from "@/modules/interfaces/IAccountsStudents";

export const accountsStudentsApi = {
  //   create: (payload: IAccountsStudents) =>
  //     axios.post("/account-students", payload),

  changePassword: (payload: IChangePasswordAccountsStudents) =>
    axios.patch("/account-students/change-password", payload),

  delete: (id: string) => axios.delete(`/account-students/${id}`),

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
