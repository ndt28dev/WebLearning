import { IStudentResults } from "./IStudentResults";

export interface IParameter {
  title?: string;
  description?: string;
}

export interface IAchievementsHeader {
  image?: string;
  title?: string;
  description?: string;
}

export interface IAchievementsParameter {
  image?: string;
  title?: string;
  parameter?: IParameter[];
}

export interface IAchievementsData {
  achievementsHeader?: IAchievementsHeader;
  achievementsParameter?: IAchievementsParameter;
  achievementsList?: IStudentResults[];
}
