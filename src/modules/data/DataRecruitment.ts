import { IRecruitmentData } from "../interface/IRecruitmentData";

export const recruitmentData: IRecruitmentData = {
  recruitmentHeader: {
    topic: "Tuyển dụng tại T-Learning",
    description:
      "Tham gia đội ngũ T-Learning để cùng xây dựng môi trường học tập hiện đại, " +
      "linh hoạt và lấy người học làm trung tâm. Chúng tôi tìm kiếm giáo viên, " +
      "trợ giảng, cố vấn học tập và các vị trí vận hành với tinh thần nhiệt huyết, " +
      "tư duy phục vụ và không ngừng học hỏi.",
    image: "/images/recruitment/imageHeader.png",
  },

  recruitmentWelfare: {
    title: [
      "Mức lương cạnh tranh",
      "Đầy đủ quyền lợi theo Luật Lao động",
      "Môi trường năng động & đa văn hoá",
      "Hỗ trợ bữa trưa/đồ uống",
      "Hỗ trợ di chuyển giữa cơ sở",
      "Cơ hội thăng tiến & đào tạo",
    ],
  },

  recruitmentFind: [
    {
      title: "Việc làm giáo viên",
      description:
        "Vị trí giảng dạy chính thức tại cơ sở/online, lịch dạy ổn định, mô tả công việc rõ ràng.",
    },
    {
      title: "Việc làm gia sư",
      description:
        "Dạy kèm 1–1/nhóm nhỏ tại nhà hoặc online, chọn khu vực và khung giờ linh hoạt.",
    },
    {
      title: "Việc làm lương cao",
      description:
        "Đãi ngộ theo năng lực, thưởng theo KPI/lớp; yêu cầu kinh nghiệm và cam kết chất lượng.",
    },
    {
      title: "Việc làm tuyển gấp",
      description:
        "Ưu tiên nhận lớp ngay; xét hồ sơ & phản hồi nhanh trong 24–48 giờ.",
    },
  ],

  recruitmentList: [
    {
      id: "TL-GV-TOAN-THCS-2025-10",
      title: "Giáo viên Toán THCS",
      description:
        "Dạy lớp 12–18 học viên tại cơ sở/online; soạn giáo án theo khung nội bộ, chấm checkpoint hằng tuần.",
      image: "/images/recruitment/anh1.webp",
      startDay: new Date("2025-10-15"),
      endDay: new Date("2025-10-29"),
      slot: 3,
    },
    {
      id: "TL-GV-TOAN-THPT-2025-10",
      title: "Giáo viên Toán THPT (Ôn thi)",
      description:
        "Phụ trách 2–3 lớp/tuần; luyện đề, theo sát KPI, phản hồi cá nhân hoá sau mỗi buổi.",
      image: "/images/recruitment/anh2.webp",
      startDay: new Date("2025-10-20"),
      endDay: new Date("2025-11-03"),
      slot: 2,
    },
    {
      id: "TL-GV-ANH-FOUND-2025-10",
      title: "Giáo viên Tiếng Anh Foundations",
      description:
        "Giảng dạy 4 kỹ năng; tổ chức hoạt động tương tác; báo cáo tiến độ định kỳ cho PH/HV.",
      image: "/images/recruitment/anh3.webp",
      startDay: new Date("2025-10-18"),
      endDay: new Date("2025-11-01"),
      slot: 4,
    },
    {
      id: "TL-GV-ANH-IELTS-2025-10",
      title: "Giáo viên IELTS (6.0–7.5+)",
      description:
        "Thiết kế lộ trình theo mục tiêu band; chữa bài chi tiết; mock test 2 tuần/lần.",
      image: "/images/recruitment/anh4.webp",
      startDay: new Date("2025-10-25"),
      endDay: new Date("2025-11-08"),
      slot: 2,
    },
    {
      id: "TL-GV-TIN-2025-11",
      title: "Giáo viên Tin học Ứng dụng",
      description:
        "Dạy Word/Excel/PowerPoint & kỹ năng số; giao dự án nhỏ gắn với thực tế.",
      image: "/images/recruitment/anh5.webp",
      startDay: new Date("2025-11-05"),
      endDay: new Date("2025-11-19"),
      slot: 2,
    },
    {
      id: "TL-GS-TOAN-1-1-2025-10",
      title: "Gia sư Toán 1–1 (THCS)",
      description:
        "Dạy kèm tại nhà/online 3 buổi/tuần; kế hoạch cá nhân hoá theo mục tiêu từng học viên.",
      image: "/images/recruitment/anh6.webp",
      startDay: new Date("2025-10-12"),
      endDay: new Date("2025-10-26"),
      slot: 5,
    },
    {
      id: "TL-GS-VAN-NHOM-2025-10",
      title: "Gia sư Ngữ văn (nhóm nhỏ 3–5 HV)",
      description:
        "Rèn kỹ năng đọc–viết–nghị luận; chữa bài chi tiết; lịch linh hoạt theo khu vực.",
      image: "/images/recruitment/anh7.webp",
      startDay: new Date("2025-10-16"),
      endDay: new Date("2025-10-30"),
      slot: 3,
    },
    {
      id: "TL-GS-ANH-ONLINE-2025-10",
      title: "Gia sư Tiếng Anh Online",
      description:
        "Kèm 1–1 qua Zoom/Meet; bài tập giao theo năng lực; báo cáo tuần cho PH/HV.",
      image: "/images/recruitment/anh8.webp",
      startDay: new Date("2025-10-22"),
      endDay: new Date("2025-11-05"),
      slot: 6,
    },
    {
      id: "TL-GS-LY-THPT-2025-10",
      title: "Gia sư Vật lý THPT (Ôn thi)",
      description:
        "Hệ thống hoá công thức, bài tập theo chuyên đề; mock test định kỳ.",
      image: "/images/recruitment/anh9.webp",
      startDay: new Date("2025-10-28"),
      endDay: new Date("2025-11-11"),
      slot: 2,
    },
    {
      id: "TL-GS-TIN-2025-11",
      title: "Gia sư Tin học Cơ bản",
      description:
        "Kèm kỹ năng máy tính thiết yếu; đặt mục tiêu theo nhu cầu thực tế của học viên.",
      image: "/images/recruitment/anh10.webp",
      startDay: new Date("2025-11-03"),
      endDay: new Date("2025-11-17"),
      slot: 4,
    },
  ],
};
