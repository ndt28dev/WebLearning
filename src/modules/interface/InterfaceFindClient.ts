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

export interface ISubject {
  educationalLevel: string;
  subject: string[];
}

export interface ITimeStudy {
  time: string[];
}

export interface IDayStudy {
  day: string[];
}

export interface IDayStudy {
  day: string[];
}

export interface ILevelStudy {
  levels: string[];
}
