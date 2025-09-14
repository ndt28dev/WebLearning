import { IMenuLink } from "../interface/IMenuLink";

export const menuAdmin: IMenuLink[] = [
  { label: "Tổng quan", link: "admin" },

  {
    label: "Tin tức & Thông báo",
    initiallyOpened: true,
    links: [
      { label: "Thông báo chung", link: "general" },
      { label: "Lịch sự kiện", link: "events" },
      { label: "Hoạt động ngoại khóa", link: "activities" },
      { label: "Bản tin nhà trường", link: "bulletin" },
    ],
  },

  {
    label: "Quản lý học tập",
    links: [
      { label: "Thời khóa biểu", link: "schedule" },
      { label: "Kết quả học tập", link: "results" },
      { label: "Kế hoạch giảng dạy", link: "plan" },
      { label: "Quản lý lớp học", link: "classes" },
      { label: "Quản lý môn học", link: "subjects" },
    ],
  },

  {
    label: "Quản lý nhân sự",
    links: [
      { label: "Học sinh", link: "students" },
      { label: "Giáo viên", link: "teachers" },
      { label: "Phụ huynh", link: "parents" },
      { label: "Nhân viên", link: "employees" },
    ],
  },

  {
    label: "Quản lý trường",
    links: [
      { label: "Khối lớp", link: "grades" },
      { label: "Phòng học", link: "rooms" },
      { label: "Cơ sở vật chất", link: "facilities" },
    ],
  },

  {
    label: "Tài chính",
    links: [
      { label: "Thu học phí", link: "tuition" },
      { label: "Chi phí hoạt động", link: "expenses" },
      { label: "Báo cáo tài chính", link: "reports" },
    ],
  },

  {
    label: "Khảo thí & Chứng chỉ",
    links: [
      { label: "Lịch thi", link: "schedule" },
      { label: "Ngân hàng đề", link: "questions" },
      { label: "Kết quả thi", link: "results" },
      { label: "Chứng chỉ & Bằng cấp", link: "certificates" },
    ],
  },

  {
    label: "Phân tích & Báo cáo",
    link: "/reports",
  },

  {
    label: "Quản lý hồ sơ",
    links: [
      { label: "Hồ sơ học sinh", link: "students" },
      { label: "Hồ sơ giáo viên", link: "teachers" },
      { label: "Hồ sơ nhân viên", link: "employees" },
    ],
  },

  {
    label: "Bảo mật & Tài khoản",
    links: [
      { label: "Quản lý người dùng", link: "users" },
      { label: "Phân quyền truy cập", link: "roles" },
      { label: "Xác thực hai lớp (2FA)", link: "2fa" },
    ],
  },

  { label: "Cài đặt hệ thống", link: "settings" },
];

export const menuStudent: IMenuLink[] = [
  { label: "Tổng quan", link: "student" },

  // {
  //   label: "Tin tức & Thông báo",
  //   links: [
  //     { label: "Thông báo chung", link: "general" },
  //     { label: "Lịch sự kiện", link: "events" },
  //     { label: "Hoạt động ngoại khóa", link: "activities" },
  //   ],
  // },

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
