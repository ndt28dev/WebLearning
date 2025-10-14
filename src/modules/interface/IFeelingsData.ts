import { IStudentReviews } from "./IParentReviews";

export interface IFeelingsHeader {
  image?: string[];
}

export interface IFeelingsParameter {
  title?: string;
  description?: string;
}

export interface IFeelingsData {
  feelingsHeader?: IFeelingsHeader;
  feelingsParameter?: IFeelingsParameter[];
  feelingsList?: IStudentReviews[];
}
