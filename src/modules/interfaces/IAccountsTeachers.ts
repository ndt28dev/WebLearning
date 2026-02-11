import { ITeachers } from "./ITeachers";

export type IAccountsTeachers = {
  _id?: string;
  student?: ITeachers;
  username?: string;
  password?: string;
  is_active?: boolean;
  code_id?: string;
  code_expired?: string;
};

export type IChangePasswordAccountsTeachers = {
  _id?: string;
  username?: string;
  oldPassword?: string;
  newPassword?: string;
  confirmPassword?: string;
};
