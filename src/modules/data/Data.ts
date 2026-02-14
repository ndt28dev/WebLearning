import { IMenuLink } from "../interface/IMenuLink";

export const menuAdmin: IMenuLink[] = [
  { label: "Tổng quan", link: "dashboard" },

  {
    label: "Quản lý nhân viên",
    links: [{ label: "Danh sách nhân viên", link: "employees" }],
  },
  {
    label: "Quản lý giáo viên",
    links: [
      { label: "Danh sách giáo viên", link: "teachers" },
      { label: "Chứng chỉ giáo viên", link: "teacher-certificates" },
    ],
  },
  {
    label: "Quản lý học viên",
    links: [
      { label: "Danh sách học viên", link: "students" },
      { label: "Quyền lợi", link: "student-benefits" },
      { label: "Thành tích", link: "achievements" },
      { label: "Cảm nhận & đánh giá", link: "testimonials" },
      { label: "Chứng chỉ & bằng cấp", link: "certificates" },
    ],
  },
  {
    label: "Quản lý học tập",
    links: [
      { label: "Chương trình đào tạo", link: "training-programs" },
      { label: "Khoá học", link: "courses" },
      // { label: "Lớp học", link: "classes" },
      { label: "Thời khoá biểu", link: "timetables" },
      { label: "Điểm danh", link: "attendance" },
      { label: "Đánh giá & nhận xét", link: "assessments" },
      { label: "Bài kiểm tra", link: "exams" },
      { label: "Kết quả học tập", link: "results" },
    ],
  },
  {
    label: "Lịch khai giảng",
    link: "opening-schedules",
  },

  {
    label: "Tài chính",
    links: [
      { label: "Thu học phí", link: "tuition-collection" },
      { label: "Công nợ học viên", link: "student-debts" },
      { label: "Miễn / giảm học phí", link: "discounts" },
      { label: "Hoàn học phí", link: "refunds" },
      { label: "Chi phí hoạt động", link: "expenses" },
      { label: "Báo cáo tài chính", link: "financial-reports" },
    ],
  },

  {
    label: "Quản lý nội dung",
    links: [
      { label: "Giới thiệu", link: "about" },
      { label: "Lịch sử hoạt động", link: "history" },
      { label: "Chính sách & cam kết", link: "policies" },
    ],
  },

  {
    label: "Bảng tin",
    links: [
      { label: "Tin tức", link: "news" },
      { label: "Sự kiện", link: "events" },
    ],
  },

  {
    label: "Đối tác",
    link: "partners",
  },

  {
    label: "Tuyển dụng",
    links: [
      { label: "Bài tuyển dụng", link: "jobs" },
      { label: "Ứng tuyển", link: "job-applications" },
    ],
  },

  {
    label: "Liên hệ",
    link: "contacts",
  },

  {
    label: "Tuyển sinh & CSKH",
    links: [
      { label: "Tư vấn tuyển sinh", link: "admissions" },
      { label: "Đăng ký học thử", link: "trial-registrations" },
      { label: "Yêu cầu & phản hồi", link: "support-tickets" },
      { label: "Lịch hẹn phụ huynh", link: "parent-appointments" },
    ],
  },
  {
    label: "Quản trị hệ thống",
    links: [
      {
        label: "Quản lý tài khoản",
        links: [
          { label: "Tài khoản học viên", link: "accounts/students" },
          { label: "Tài khoản giáo viên", link: "accounts/teachers" },
          { label: "Tài khoản nhân viên", link: "accounts/employees" },
        ],
      },
      { label: "Vài trò & Phân quyền", link: "roles" },
      { label: "Nhật ký hoạt động", link: "audit-logs" },
      { label: "Cấu hình hệ thống", link: "settings" },
    ],
  },
];

export const menuStudent: IMenuLink[] = [
  { label: "Tổng quan", link: "student" },

  {
    label: "Học tập",
    links: [
      { label: "Thời khóa biểu", link: "schedule" },
      { label: "Kết quả học tập", link: "results" },
      { label: "Tài liệu học tập", link: "materials" },
    ],
  },

  {
    label: "Khảo thí & Chứng chỉ",
    links: [
      { label: "Lịch thi", link: "exams" },
      { label: "Kết quả thi", link: "exam-results" },
      { label: "Chứng chỉ", link: "certificates" },
    ],
  },

  {
    label: "Tài chính",
    links: [
      { label: "Học phí", link: "tuition" },
      { label: "Lịch sử thanh toán", link: "payments" },
    ],
  },

  {
    label: "Tài khoản cá nhân",
    links: [
      { label: "Thông tin cá nhân", link: "profile" },
      { label: "Đổi mật khẩu", link: "change-password" },
      { label: "Bảo mật (2FA)", link: "2fa" },
    ],
  },
];
