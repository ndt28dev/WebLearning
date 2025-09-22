export interface IMenuFooterList {
  title: string;
  links: { label: string; link: string }[];
}

export interface IMenuFooterInfo {
  image: string;
  imageNotification?: string;
  description?: string;
  phone?: string[];
  location?: string[];
  facebook?: string;
  intagram?: string;
  youtube?: string;
  tiktok?: string;
  linkedin?: string;
  twitter?: string;
  email?: string;
}

export interface IMenuFooter {
  menuFooterInfo: IMenuFooterInfo;
  menuFooterList: IMenuFooterList[];
}

export const dataMockFooter: IMenuFooter = {
  menuFooterInfo: {
    image: "images/logo/logo_white.png",
    imageNotification: "images/logo/logoSaleNoti.png",
    description:
      "T-Learning là nền tảng học tập hiện đại kết nối học viên với giảng viên chất lượng",
    facebook: "https://www.facebook.com/duythuan28102002",
    intagram: "https://www.instagram.com/ndt.gk.28/",
    youtube: "https://www.youtube.com/@iamchaus2083",
    tiktok: "https://www.tiktok.com/@ndt281002",
    linkedin: "5",
    twitter: "6",
    location: [
      "15 Trương hán siêu, Buôn Hồ, ĐăkLăk",
      "686 Cách mạng tháng 8, Phường 5, quận Tân Bình, TP Hồ Chí Minh",
    ],
    email: "",
    phone: ["0764513977"],
  },
  menuFooterList: [
    {
      title: "T-Learning",
      links: [
        { label: "Giới thiệu", link: "/about" },
        { label: "Tầm nhìn & Sứ mệnh", link: "/about#mission" },
        { label: "Đội ngũ giảng viên", link: "/tutors" },
        { label: "Tuyển dụng", link: "/careers" },
      ],
    },
    {
      title: "Chương trình học",
      links: [
        { label: "Toán THCS", link: "/programs/toan-thcs" },
        { label: "Vật lý THPT", link: "/programs/vat-ly-thpt" },
        { label: "Hóa học cơ bản", link: "/programs/hoa-hoc" },
        { label: "Luyện thi Đại học", link: "/programs/luyen-thi" },
      ],
    },
    {
      title: "Tài nguyên",
      links: [
        { label: "Blog", link: "/blog" },
        { label: "Tài liệu miễn phí", link: "/resources" },
        { label: "Kết quả học viên", link: "/student-results" },
        { label: "Lịch khai giảng", link: "/schedule" },
      ],
    },
    {
      title: "Hỗ trợ",
      links: [
        { label: "Câu hỏi thường gặp (FAQ)", link: "/help/faq" },
        { label: "Hướng dẫn thanh toán", link: "/help/payment" },
        { label: "Liên hệ", link: "/contact" },
        { label: "Báo lỗi / Góp ý", link: "/support" },
      ],
    },
  ],
};
