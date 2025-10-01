import { IRecruitment } from "./IRecruitment";

export interface IRecruitmentHeader {
  topic?: string;
  description?: string;
  image?: string;
}

export interface IRecruitmentWelfare {
  title?: string[];
}

export interface IRecruitmentFind {
  title?: string;
  description?: string;
}

export interface IRecruitmentData {
  recruitmentHeader?: IRecruitmentHeader;
  recruitmentWelfare?: IRecruitmentWelfare;
  recruitmentFind?: IRecruitmentFind[];
  recruitmentList?: IRecruitment[];
}
