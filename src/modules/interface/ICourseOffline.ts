import { ICourse } from "./ICourse";

export interface ICourseOffline extends ICourse {
  address?: string; //. địa chỉ dạy
  clasroom?: string; // phòng học
  price?: number; // giá
  totalTime?: string; // tổng thời gian học
}
