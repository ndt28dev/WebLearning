import { IPrivilege } from "./IPrivilege";

export interface IBenefitsIntroduce {
  image?: string;
  description?: string[];
}

export interface IBenefitsData {
  benefitsIntroduce?: IBenefitsIntroduce;
  benefitsContent?: IPrivilege[];
}
