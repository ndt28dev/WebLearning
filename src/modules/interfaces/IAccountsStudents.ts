import { IStudents } from "./IStudents";

export type IAccountsStudents = {
  _id?: string;
  student?: IStudents;
  username?: string;
  password?: string;
  is_active?: boolean;
  code_id?: string;
  code_expired?: string;
};

export type IChangePasswordAccountsStudents = {
  _id?: string;
  username?: string;
  oldPassword?: string;
  newPassword?: string;
  confirmPassword?: string;
};
