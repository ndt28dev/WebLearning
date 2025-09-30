import { ITeacher } from "./ITeacher";

export interface ITeacherHeader {
  topic?: string;
  description?: string;
  image?: string;
}

export interface IIntroduce {
  title?: string;
  description?: string;
}

export interface ITeacherIntroduce {
  title?: string;
  description?: string;
  introduces?: IIntroduce[];
}

export interface ITeacherList {
  title?: string;
  description?: string;
  teachers?: ITeacher[];
}

export interface ITeacherAdvisor {
  title?: string;
  description?: string;
  advisors?: ITeacher[];
}

export interface ITeacherInteract {
  title?: string;
  description?: string;
  iamgeInteract?: string[];
}

export interface ITeacherData {
  teachersHeader?: ITeacherHeader;
  teachersIntroduce?: ITeacherIntroduce;
  teachersList?: ITeacherList;
  teachersAdvisor?: ITeacherAdvisor;
  teachersInteract?: ITeacherInteract;
}
