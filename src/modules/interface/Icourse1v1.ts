import { ITeacher } from "./ITeacher";

export interface ICourse1v1 {
  id: number;
  teacher: ITeacher;
  totalTime?: string;
  price?: number;
  day?: string;
  startTime?: string;
  endTime?: string;
  subjects?: string[];
}
