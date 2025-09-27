import { ICourse } from "./ICourse";

export interface ICourseOnline extends ICourse {
  price?: number; // giá
  totalTime?: string; // tổng thời gian học
  link?: string;
}
