import { ITeachers } from "./ITeachers";

export type ITeacherCertificates = {
  _id?: string;
  teacher?: ITeachers;
  name?: string;
  organization?: string;
  certificate_number?: string;
  issue_date?: Date;
  expiry_date?: Date;
  description?: string;
  image_url?: string;
  verification_status?: string;
};
