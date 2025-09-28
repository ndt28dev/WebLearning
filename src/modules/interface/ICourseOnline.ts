import { CourseType, ICourse } from "./ICourse";

export interface ICourseOnline extends ICourse {
  price?: number; // giá
  totalTime?: string; // tổng thời gian học
  capacity?: number; // tổng slot
  bookedCount?: number;
  link?: string;
}
