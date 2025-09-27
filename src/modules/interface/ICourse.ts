import { ITeacher } from "./ITeacher";

export enum CourseStatus {
  NotStarted = "Chưa bắt đầu",
  Ongoing = "Đang diễn ra",
  Ended = "Đã kết thúc",
}

export interface ICourse {
  id?: number;
  code?: string;
  title?: string; // tiêu đề
  description?: string; // mô tả
  image?: string; // hình ảnh
  day?: string; // thứ học
  startTime?: string; // giờ bđ học
  endTime?: string; // giờ kết thúc học
  startDate?: Date; // ngày bắt đầu học
  teacher?: ITeacher; // người dạy
  status?: CourseStatus; // tình trạng khoá học
  isHidden?: boolean; // trạng thái
}
