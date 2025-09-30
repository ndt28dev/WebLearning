import { IPerson } from "./IPerson";
export type InstructorRole = "Tutor" | "Teacher";
export interface ITeacher extends IPerson {
  id?: number;
  role?: InstructorRole;
  description?: string; // mô tả chi tiết
  experience?: string[]; // kinh nghiệm giảng dạy
  university?: string; // học trường nào
  degree?: string; // chuyên ngành hoặc bằng cấp
  examScore?: string; // điểm thi đại học (optional)
  yearsOfExperience?: number; // số năm kinh nghiệm
  certificates?: string[]; // danh sách chứng chỉ (IELTS 7.5, sư phạm...)
  achievements?: string[]; // giải thưởng, thành tích
  admissionImages?: string[]; // hình ảnh đậu ĐH (nếu có)
  introVideoUrl?: string; // video demo/giới thiệu (nếu có)
}
