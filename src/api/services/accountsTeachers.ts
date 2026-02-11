import axios from "@/api/config/axios.config";
import { IChangePasswordAccountsTeachers } from "@/modules/interfaces/IAccountsTeachers";

export const accountsTeachersApi = {
  //   create: (payload: IAccountsStudents) =>
  //     axios.post("/account-students", payload),

  changePassword: (payload: IChangePasswordAccountsTeachers) =>
    axios.patch("/account-teachers/change-password", payload),

  delete: (id: string) => axios.delete(`/account-teachers/${id}`),

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
