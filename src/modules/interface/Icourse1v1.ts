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

export interface IDistrict {
  id: number;
  name: string;
  type: "Quận" | "Huyện" | "Thành phố" | "Thị xã";
}

export interface ICity {
  id: number;
  name: string;
  type: "Thành phố trực thuộc TW" | "Tỉnh";
  districts: IDistrict[];
}
