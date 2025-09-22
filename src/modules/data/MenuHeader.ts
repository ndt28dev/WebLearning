type NavLink = {
  link: string;
  label: string;
  links?: { link: string; label: string }[];
};

export const menuHeader: NavLink[] = [
  // { link: "/", label: "Trang chủ" },
  {
    link: "/introduce",
    label: "Giới thiệu",
    links: [
      { link: "/1", label: "Về T-Learning" },
      { link: "/2", label: "Đối tác" },
      { link: "/3", label: "Đội ngũ nhân sự" },
      { link: "/4", label: "Đội ngũ gia sư" },
      { link: "/5", label: "Chính sách và cam kết" },
    ],
  },
  {
    link: "/courses-1v1",
    label: "Khoá học",
    links: [
      { link: "/courses-1v1", label: "Kèm 1v1 cùng gia sư" },
      { link: "/courses-offline", label: "Học offline tại lớp" },
      { link: "/courses-online", label: "Học online" },
    ],
  },
  { link: "/opening-schedule", label: "Lịch khai giảng" },
  {
    link: "/students",
    label: "Học viên",
    links: [
      { link: "/students-1", label: "Quyền lợi" },
      { link: "/students-2", label: "Thành tích" },
      { link: "/students-3", label: "Cảm nhận" },
    ],
  },
  {
    link: "/news-and-events",
    label: "Bảng tin",
    links: [
      { link: "/news-and-events", label: "Tin tức & sự kiện" },
      { link: "/recruitment", label: "Tuyển dụng" },
    ],
  },
  { link: "/contact", label: "Liên hệ" },
];
