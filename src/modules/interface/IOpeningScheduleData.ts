export interface IOpeningScheduleHeader {
  title?: string;
  subTitle?: string;
  description?: string[];
  images?: string[];
}

export interface IOpeningSchedulePresent {
  title?: string;
  description?: string;
  images?: string[];
}

export interface IOpeningScheduleData {
  openingScheduleHeader?: IOpeningScheduleHeader;
  openingSchedulePresent?: IOpeningSchedulePresent;
}
