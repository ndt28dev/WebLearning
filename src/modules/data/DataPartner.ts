import { IPartnerData } from "../interface/IPartnerData";

export const partnerData: IPartnerData = {
  partnerHeader: {
    topic: "Đối tác đồng hành với T-Learning",
    image: "/images/partner/imageHeader.jpg",
    description:
      "T-Learning hợp tác cùng các trường, tổ chức học thuật và doanh nghiệp để mở rộng tài nguyên, chuẩn hóa chương trình và mang đến cơ hội học tập – thực hành – học bổng cho học viên.",
  },
  partnerList: [
    {
      id: 1,
      name: "Trường THCS Nguyễn Trãi",
      image: "/images/partner/anh1.jpg",
      detailsPartner: {
        address: "Số 45 Nguyễn Trãi, P. Bến Thành, Q.1, TP.HCM",
        phone: "1900 638 101",
        website: "https://nguyentrai.edu.vn",
        contactPerson: "Cô Lan (P. Học vụ)",
        since: new Date("2023-08-01"),
        cooperationAreas: [
          "Bồi dưỡng học sinh giỏi",
          "Lớp bổ trợ Toán - Anh",
          "Tư vấn lộ trình",
        ],
        description:
          "Phối hợp tổ chức các lớp tăng cường kỹ năng và câu lạc bộ học thuật sau giờ học.",
        image: "/images/partner/cover1.jpg",
      },
    },
    {
      id: 2,
      name: "Trường THCS Lê Hồng Phong",
      image: "/images/partner/anh2.jpg",
      detailsPartner: {
        address: "Số 120 Nguyễn Chí Thanh, P. 4, Q.5, TP.HCM",
        phone: "1900 638 102",
        website: "https://lehongphong.edu.vn",
        contactPerson: "Thầy Hưng (Tổ trưởng Toán)",
        since: new Date("2024-01-15"),
        cooperationAreas: [
          "Chuyên đề luyện thi 9 lên 10",
          "Workshop kỹ năng học tập",
        ],
        description:
          "Đồng tổ chức chuyên đề luyện đề và chương trình ôn cụm theo tuần.",
        image: "/images/partner/cover2.jpg",
      },
    },
    {
      id: 3,
      name: "Trường THCS Chu Văn An",
      image: "/images/partner/anh3.jpg",
      detailsPartner: {
        address: "Số 230 Điện Biên Phủ, P. 17, Q. Bình Thạnh, TP.HCM",
        phone: "1900 638 103",
        website: "https://chuvanan.edu.vn",
        contactPerson: "Cô Thảo (Cố vấn học tập)",
        since: new Date("2023-10-10"),
        cooperationAreas: [
          "Tiếng Anh giao tiếp",
          "CLB tranh biện",
          "Theo dõi tiến độ LMS",
        ],
        description:
          "Triển khai lớp kỹ năng và báo cáo tiến độ định kỳ qua LMS cho phụ huynh.",
        image: "/images/partner/cover3.jpg",
      },
    },
    {
      id: 4,
      name: "Trường THCS Nguyễn Du",
      image: "/images/partner/anh4.jpg",
      detailsPartner: {
        address: "Số 35 Nguyễn Tri Phương, P. 6, Q.10, TP.HCM",
        phone: "1900 638 104",
        website: "https://nguyendu.edu.vn",
        contactPerson: "Thầy Tín (P. Công tác HS)",
        since: new Date("2024-04-05"),
        cooperationAreas: [
          "Bổ trợ Ngữ văn",
          "Kỹ năng viết học thuật",
          "Hoạt động ngoại khoá",
        ],
        description:
          "Tổ chức lớp bổ trợ theo nhóm nhỏ và hoạt động trải nghiệm cuối tuần.",
        image: "/images/partner/cover4.jpg",
      },
    },
    {
      id: 5,
      name: "Trường THPT Gia Định",
      image: "/images/partner/anh5.jpg",
      detailsPartner: {
        address: "Số 25 Nguyễn Xí, P. 26, Q. Bình Thạnh, TP.HCM",

        phone: "1900 638 105",
        website: "https://giadinh.edu.vn",
        contactPerson: "Cô Minh (Tổ Anh)",
        since: new Date("2024-09-01"),
        cooperationAreas: ["IELTS Foundation", "Hướng nghiệp du học"],
        description:
          "Chương trình IELTS nền tảng và cố vấn lộ trình xét tuyển quốc tế.",
        image: "/images/partner/cover5.jpg",
      },
    },
    {
      id: 6,
      name: "Nhà xuất bản Học Thuật Số",
      image: "/images/partner/anh6.jpg",
      detailsPartner: {
        address: "Số 18 Võ Văn Tần, P. 6, Q.3, TP.HCM",
        phone: "1900 638 106",
        website: "https://hocthuatsovietnam.vn",
        contactPerson: "Anh Khoa (Partnerships)",
        since: new Date("2023-06-20"),
        cooperationAreas: [
          "Tài liệu số hoá",
          "Ngân hàng bài tập",
          "Bản quyền nội dung",
        ],
        description:
          "Cung cấp tài liệu số và kho bài tập chuẩn hoá cho các lớp online/offline.",
        image: "/images/partner/cover6.jpg",
      },
    },
    {
      id: 7,
      name: "Câu lạc bộ STEM Thành phố",
      image: "/images/partner/anh7.jpg",
      detailsPartner: {
        address: "Số 97 Nguyễn Thị Minh Khai, P. Bến Thành, Q.1, TP.HCM",
        phone: "1900 638 107",
        website: "https://stemtp.vn",
        contactPerson: "Chị Hạnh (Điều phối)",
        since: new Date("2022-12-12"),
        cooperationAreas: [
          "Workshop STEM",
          "Dự án thực hành",
          "Cuộc thi học thuật",
        ],
        description:
          "Phối hợp workshop định kỳ và dự án STEM liên trường cho học sinh.",
        image: "/images/partner/cover7.jpg",
      },
    },
    {
      id: 8,
      name: "Trung tâm Khảo thí & Đánh giá",
      image: "/images/partner/anh8.jpg",
      detailsPartner: {
        address: "Số 15 Phan Đăng Lưu, P. 3, Q. Phú Nhuận, TP.HCM",
        phone: "1900 638 108",
        website: "https://khaothi-danhgia.vn",
        contactPerson: "Anh Lộc (Học thuật)",
        since: new Date("2023-09-30"),
        cooperationAreas: ["Chuẩn đầu ra", "Đề thi thử", "Phân tích kết quả"],
        description:
          "Xây dựng rubric đánh giá và tổ chức kỳ thi thử theo chuẩn đầu ra.",
        image: "/images/partner/cover8.jpg",
      },
    },
    {
      id: 9,
      name: "Trường THCS Trần Đại Nghĩa",
      image: "/images/partner/anh9.jpg",
      detailsPartner: {
        address: "Số 20 Lý Tự Trọng, P. Bến Nghé, Q.1, TP.HCM",
        phone: "1900 638 109",
        website: "https://trandainghia.edu.vn",
        contactPerson: "Cô Yến (Tổ Lý)",
        since: new Date("2025-01-10"),
        cooperationAreas: ["Bồi dưỡng Vật lý", "CLB Khoa học"],
        description:
          "Tổ chức lớp chuyên đề và CLB khoa học cho học sinh khối 8–9.",
        image: "/images/partner/cover9.jpg",
      },
    },
    {
      id: 10,
      name: "Học viện Công nghệ Sáng tạo",
      image: "/images/partner/anh10.jpg",
      detailsPartner: {
        address: "Số 300 Võ Văn Ngân, P. Bình Thọ, TP. Thủ Đức, TP.HCM",
        phone: "1900 638 110",
        website: "https://sangtao.academy",
        contactPerson: "Mr. Lee (Academic)",
        since: new Date("2024-02-22"),
        cooperationAreas: ["Lập trình Python", "Robotics", "Data cơ bản"],
        description:
          "Đồng phát triển khoá học công nghệ và dự án thực hành theo nhóm.",
        image: "/images/partner/cover10.jpg",
      },
    },
    {
      id: 11,
      name: "Doanh nghiệp EdTech A+",
      image: "/images/partner/anh11.jpg",
      detailsPartner: {
        address: "Số 15 Nguyễn Lương Bằng, P. Tân Phú, Q.7, TP.HCM",
        phone: "1900 638 111",
        website: "https://a-plus-edtech.com",
        contactPerson: "Anh Phát (BD Manager)",
        since: new Date("2023-05-05"),
        cooperationAreas: ["Học bổng", "Bản quyền nền tảng", "Triển khai LMS"],
        description:
          "Tài trợ học bổng và chuyển giao giải pháp LMS tích hợp cho trung tâm.",
        image: "/images/partner/cover11.jpg",
      },
    },
    {
      id: 12,
      name: "Trường THCS Hồng Bàng",
      image: "/images/partner/anh12.jpg",
      detailsPartner: {
        address: "Số 250 Trần Hưng Đạo, P. 11, Q.5, TP.HCM",
        phone: "1900 638 112",
        website: "https://hongbang.edu.vn",
        contactPerson: "Cô Nhi (Công tác HS)",
        since: new Date("2024-08-18"),
        cooperationAreas: ["Bổ trợ Toán – Văn", "Kỹ năng học tập"],
        description:
          "Phối hợp lớp bổ trợ theo nhóm nhỏ và cố vấn thói quen học tập.",
        image: "/images/partner/cover12.jpg",
      },
    },
    {
      id: 13,
      name: "Trường THPT Nguyễn Thượng Hiền",
      image: "/images/partner/anh13.jpg",
      detailsPartner: {
        address: "Số 28 Hoàng Văn Thụ, P. 9, Q. Tân Bình, TP.HCM",
        phone: "1900 638 113",
        website: "https://nguyenthuonghien.edu.vn",
        contactPerson: "Thầy Dũng (Tổ Toán)",
        since: new Date("2024-10-01"),
        cooperationAreas: [
          "Toán Nâng cao",
          "Kỹ năng giải nhanh",
          "Ôn thi THPT",
        ],
        description:
          "Phát triển chuyên đề Toán nâng cao và lớp giải đề tăng cường theo tuần.",
        image: "/images/partner/cover13.jpg",
      },
    },
    {
      id: 14,
      name: "Viện Ngôn ngữ và Văn hoá",
      image: "/images/partner/anh14.jpg",
      detailsPartner: {
        address: "Số 80 Huỳnh Văn Bánh, P. 15, Q. Phú Nhuận, TP.HCM",
        phone: "1900 638 114",
        website: "https://ngonnguvanhoa.vn",
        contactPerson: "Cô Hà (Học thuật)",
        since: new Date("2023-11-12"),
        cooperationAreas: [
          "Tiếng Anh học thuật",
          "Viết luận",
          "Thi chuẩn quốc tế",
        ],
        description:
          "Đồng xây dựng module viết học thuật và chương trình luyện thi chuẩn quốc tế.",
        image: "/images/partner/cover14.jpg",
      },
    },
    {
      id: 15,
      name: "Công ty Công nghệ Giáo dục NextGen",
      image: "/images/partner/anh15.jpg",
      detailsPartner: {
        address: "Số 18 Nguyễn Gia Trí (D2), P. 25, Q. Bình Thạnh, TP.HCM",
        phone: "1900 638 115",
        website: "https://nextgen-edutech.vn",
        contactPerson: "Anh Khánh (Product)",
        since: new Date("2024-05-07"),
        cooperationAreas: [
          "Nền tảng học trực tuyến",
          "Chấm điểm tự động",
          "Data học tập",
        ],
        description:
          "Tích hợp nền tảng học tập và công cụ chấm – phân tích dữ liệu học tập.",
        image: "/images/partner/cover15.jpg",
      },
    },
    {
      id: 16,
      name: "CLB Toán & Khoa học Liên trường",
      image: "/images/partner/anh16.jpg",
      detailsPartner: {
        address: "Số 1 Lê Duẩn, P. Bến Nghé, Q.1, TP.HCM",
        phone: "1900 638 116",
        website: "https://toankhoahoc.club",
        contactPerson: "Thầy Nam (Điều phối)",
        since: new Date("2022-09-09"),
        cooperationAreas: [
          "CLB học thuật",
          "Cuộc thi học sinh giỏi",
          "Seminar chuyên đề",
        ],
        description:
          "Phối hợp tổ chức seminar định kỳ và cuộc thi liên trường các môn tự nhiên.",
        image: "/images/partner/cover16.jpg",
      },
    },
    {
      id: 17,
      name: "Trường THCS – THPT Lạc Hồng",
      image: "/images/partner/anh17.jpg",
      detailsPartner: {
        address: "Số 25 Kha Vạn Cân, P. Linh Trung, TP. Thủ Đức, TP.HCM",
        phone: "1900 638 117",
        website: "https://lachong.edu.vn",
        contactPerson: "Cô Thu (P. Học vụ)",
        since: new Date("2023-03-25"),
        cooperationAreas: [
          "Ôn thi THPT QG",
          "Kỹ năng học tập",
          "Theo dõi tiến độ LMS",
        ],
        description:
          "Tổ chức lộ trình ôn thi theo giai đoạn và báo cáo tiến bộ định kỳ.",
        image: "/images/partner/cover17.jpg",
      },
    },
    {
      id: 18,
      name: "Học viện STEM Việt",
      image: "/images/partner/anh18.jpg",
      detailsPartner: {
        address: "Số 45 Nguyễn Thị Thập, P. Tân Phú, Q.7, TP.HCM",
        phone: "1900 638 118",
        website: "https://stemviet.academy",
        contactPerson: "Mr. Phong (Academic)",
        since: new Date("2024-06-18"),
        cooperationAreas: ["Robotics", "IoT cơ bản", "Dự án liên môn"],
        description:
          "Đồng triển khai chương trình STEM và dự án thực hành cho học sinh THCS/THPT.",
        image: "/images/partner/cover18.jpg",
      },
    },
    {
      id: 19,
      name: "Doanh nghiệp Xuất bản Sáng Tạo",
      image: "/images/partner/anh19.jpg",
      detailsPartner: {
        address: "Số 12 Mạc Đĩnh Chi, P. Đa Kao, Q.1, TP.HCM",
        phone: "1900 638 119",
        website: "https://sangtaopublishing.vn",
        contactPerson: "Chị Vy (Partnerships)",
        since: new Date("2023-08-28"),
        cooperationAreas: [
          "Bản quyền tài liệu",
          "Sách tham khảo",
          "E-book học thuật",
        ],
        description:
          "Cung cấp bản quyền tài liệu học thuật và xuất bản e-book cho chương trình.",
        image: "/images/partner/cover19.jpg",
      },
    },
    {
      id: 20,
      name: "Trung tâm Khởi nghiệp Học sinh",
      image: "/images/partner/anh20.jpg",
      detailsPartner: {
        address: "Số 85 Nguyễn Tất Thành, P. 13, Q.4, TP.HCM",
        phone: "1900 638 120",
        website: "https://startup-students.vn",
        contactPerson: "Anh Tùng (Mentor)",
        since: new Date("2024-11-05"),
        cooperationAreas: [
          "Kỹ năng khởi nghiệp",
          "Dự án nhóm",
          "Pitching & Demo Day",
        ],
        description:
          "Kết nối mentor doanh nghiệp, tổ chức workshop và ngày hội trình bày dự án.",
        image: "/images/partner/cover20.jpg",
      },
    },
  ],
};
