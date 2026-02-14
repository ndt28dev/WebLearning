import { IEmployees } from "./IEmployees";

export type IAccountsEmployees = {
  _id?: string;
  employee?: IEmployees;
  username?: string;
  password?: string;
  is_active?: boolean;
  code_id?: string;
  code_expired?: string;
};

export type IChangePasswordAccountsEmployees = {
  _id?: string;
  username?: string;
  oldPassword?: string;
  newPassword?: string;
  confirmPassword?: string;
};
