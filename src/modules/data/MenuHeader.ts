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
      { link: "/introduce", label: "Về T-Learning" },
      { link: "/partner", label: "Đối tác" },
      { link: "/teachers", label: "Đội ngũ gia sư & giáo viên" },
      { link: "/policy", label: "Chính sách & cam kết" },
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
    link: "/students-benefits",
    label: "Học viên",
    links: [
      { link: "/students-benefits", label: "Quyền lợi" },
      { link: "/students-achievements", label: "Thành tích" },
      { link: "/students-feelings", label: "Cảm nhận" },
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
