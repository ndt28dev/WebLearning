import { IFeelingsData } from "../interface/IFeelingsData";

export const feelingsData: IFeelingsData = {
  feelingsHeader: {
    image: [
      "images/feelings/anh1.png",
      "images/feelings/anh2.png",
      "images/feelings/anh3.png",
      "images/feelings/anh4.png",
      "images/feelings/anh5.png",
    ],
  },
  feelingsParameter: [
    {
      title: "21.220+",
      description: "học viên đạt điểm IELTS",
    },
    {
      title: "1091+ review",
      description: "đến từ học viên",
    },
    {
      title: "98% học viên",
      description: "hài lòng với chất lượng đào tạo",
    },
  ],
  feelingsList: [
    {
      id: 1,
      name: "Nguyễn Thị Hoa",
      school: "THCS Lê Quý Đôn – Q.3",
      description:
        "Giáo viên cực kỳ tận tâm, theo sát từng tiến độ của con và luôn phản hồi rất nhanh cho phụ huynh. Mỗi buổi học đều có mục tiêu rõ ràng và bảng tổng kết những gì con đã nắm. Sau 2 tháng, điểm số tăng rõ rệt và quan trọng hơn là con hình thành thói quen tự học, biết đặt câu hỏi và chủ động xin thêm bài luyện. Trung tâm còn có báo cáo hằng tuần giúp gia đình theo dõi sát tiến độ.",
      star: 5,
      avt: "/images/parentreviews/avt1.jpg",
      day: new Date("2024-10-01"),
      images: [
        "/images/parentreviews/anh3.png",
        "/images/parentreviews/1-2.jpg",
        "/images/parentreviews/1-3.jpg",
      ],
    },
    {
      id: 2,
      name: "Trần Văn Bình",
      school: "Tiểu học Nguyễn Bỉnh Khiêm – Q.1",
      description:
        "Môi trường học tích cực, con tôi đi học rất háo hức vì bài giảng sinh động và nhiều hoạt động tương tác. Giáo viên nắm tâm lý lứa tuổi tốt, thường xuyên khen – sửa đúng lúc để con giữ được sự hứng thú. Phụ huynh được cập nhật tiến độ qua ứng dụng và có gợi ý bài tập về nhà phù hợp. Con mạnh dạn phát biểu hơn và tự tin khi làm bài kiểm tra.",
      star: 5,
      avt: "/images/parentreviews/avt2.jpg",
      day: new Date("2024-10-06"),
      images: [
        "/images/parentreviews/anh4.png",
        "/images/parentreviews/2-2.jpg",
      ],
    },
    {
      id: 3,
      name: "Phạm Thị Lan",
      school: "THPT Gia Định – Phú Nhuận",
      description:
        "Giáo trình hệ thống, dễ hiểu, chia theo chủ đề và mức độ từ cơ bản đến vận dụng cao. Con được hướng dẫn phương pháp ghi chép và cách tự tổng hợp kiến thức sau mỗi chương, nên khi ôn thi rất nhàn. Kết quả kiểm tra giữa kỳ tăng 2 bậc, đặc biệt kỹ năng trình bày lời giải mạch lạc hơn hẳn. Trung tâm cũng có các buổi chữa đề chuyên sâu rất hữu ích.",
      star: 5,
      avt: "/images/parentreviews/avt3.jpg",
      day: new Date("2024-10-12"),
      images: [
        "/images/parentreviews/anh5.png",
        "/images/parentreviews/3-2.jpg",
        "/images/parentreviews/3-3.jpg",
      ],
    },
    {
      id: 4,
      name: "Hoàng Văn Tuấn",
      school: "THCS Trần Văn Ơn – Bình Thạnh",
      description:
        "Chất lượng giảng dạy xuất sắc, phản hồi nhanh và rất chuyên nghiệp. Thầy cô khích lệ tinh thần đúng cách nên con không còn ngại môn học như trước, chủ động xung phong làm bài trên lớp. Cơ sở vật chất hiện đại, phòng học yên tĩnh, tài liệu in ấn rõ ràng. Sau khóa cơ bản, con tự tin đăng ký thêm lớp nâng cao và vẫn theo kịp rất tốt.",
      star: 5,
      avt: "/images/parentreviews/avt4.jpg",
      day: new Date("2024-10-18"),
      images: [
        "/images/parentreviews/anh6.png",
        "/images/parentreviews/4-2.jpg",
      ],
    },
    {
      id: 5,
      name: "Lê Minh Phương",
      school: "THPT Nguyễn Thượng Hiền – Tân Bình",
      description:
        "Khoá học ôn thi bài bản với lộ trình theo tuần, có checklist kiến thức và ngân hàng đề bám sát cấu trúc. Giáo viên phân tích lỗi sai thường gặp, đưa ra mẹo phân bổ thời gian trên từng dạng bài. Sau 6 tuần, điểm thi thử tăng 1.5 điểm so với đầu vào và đặc biệt thời gian làm bài ổn định hơn. Con cũng học được cách tự đánh giá ưu – nhược để điều chỉnh chiến lược ôn.",
      star: 5,
      avt: "/images/parentreviews/avt5.jpg",
      day: new Date("2024-10-22"),
      images: [
        "/images/parentreviews/anh7.png",
        "/images/parentreviews/5-2.jpg",
        "/images/parentreviews/5-3.jpg",
      ],
    },
    {
      id: 6,
      name: "Vũ Hoài Nam",
      school: "THCS Nguyễn Gia Thiều – Tân Bình",
      description:
        "Con được theo dõi tiến độ theo tuần, giáo viên ghi chú rất cụ thể nên gia đình dễ phối hợp. Sau 1 tháng, điểm kiểm tra miệng tăng rõ rệt, con tự tin trình bày hơn.",
      star: 5,
      avt: "/images/parentreviews/avt6.jpg",
      day: new Date("2024-10-28"),
      images: [
        "/images/parentreviews/anh8.png",
        "/images/parentreviews/6-2.jpg",
      ],
    },
    {
      id: 7,
      name: "Nguyễn Kiều My",
      school: "THPT Trưng Vương – Q.1",
      description:
        "Lộ trình học linh hoạt, có bổ sung lớp chữa đề vào cuối tuần. Con bắt đầu biết tự đặt mục tiêu theo từng chương và tự đánh giá mức độ sau mỗi buổi.",
      star: 5,
      avt: "/images/parentreviews/avt7.jpg",
      day: new Date("2024-11-02"),
      images: [
        "/images/parentreviews/anh9.png",
        "/images/parentreviews/7-2.jpg",
        "/images/parentreviews/7-3.jpg",
      ],
    },
    {
      id: 8,
      name: "Trần Đình Phúc",
      school: "THCS Marie Curie – Q.3",
      description:
        "Bài giảng sinh động, có tình huống thực tế nên con hứng thú hơn. Ứng dụng báo cáo giúp phụ huynh theo dõi được mức độ hoàn thành bài tập mỗi ngày.",
      star: 5,
      avt: "/images/parentreviews/avt8.jpg",
      day: new Date("2024-11-07"),
      images: ["/images/parentreviews/anh10.png"],
    },
    {
      id: 9,
      name: "Phạm Bảo Châu",
      school: "THPT Lê Hồng Phong – Q.5",
      description:
        "Giáo viên hướng dẫn kỹ phương pháp làm bài theo từng dạng, nhất là phần trình bày. Con tăng 1 điểm ở bài kiểm tra gần nhất và làm bài ổn định thời gian hơn.",
      star: 5,
      avt: "/images/parentreviews/avt9.jpg",
      day: new Date("2024-11-15"),
      images: [
        "/images/parentreviews/anh11.png",
        "/images/parentreviews/9-2.jpg",
      ],
    },
    {
      id: 10,
      name: "Đỗ Gia Hân",
      school: "Tiểu học Đinh Tiên Hoàng – Q.1",
      description:
        "Thầy cô nắm tâm lý tốt, biết khích lệ đúng lúc. Con chủ động xin bài luyện thêm và không còn ngại hỏi khi chưa hiểu, kỹ năng ghi chép cũng tiến bộ.",
      star: 5,
      avt: "/images/parentreviews/avt10.jpg",
      day: new Date("2024-11-22"),
      images: [
        "/images/parentreviews/anh12.png",
        "/images/parentreviews/10-2.jpg",
        "/images/parentreviews/10-3.jpg",
      ],
    },
    {
      id: 11,
      name: "Lương Minh Trí",
      school: "THCS Bình Thọ – TP. Thủ Đức",
      description:
        "Kho ngân hàng đề phong phú, bám sát cấu trúc. Con được phân tích lỗi sai và có checklist ôn tập hàng tuần nên tiến bộ đều, điểm thi thử tăng 1.25 điểm.",
      star: 5,
      avt: "/images/parentreviews/avt16.jpg",
      day: new Date("2024-11-29"),
      images: [
        "/images/parentreviews/anh13.png",
        "/images/parentreviews/11-2.jpg",
      ],
    },
    {
      id: 12,
      name: "Huỳnh Khánh Ngọc",
      school: "THPT Nguyễn Khuyến – Q.10",
      description:
        "Trung tâm phối hợp chặt với gia đình, có nhắc lịch – nhắc bài qua app rất tiện. Con duy trì thói quen tự học 30 phút mỗi ngày, kết quả tăng ổn định.",
      star: 5,
      avt: "/images/parentreviews/avt17.jpg",
      day: new Date("2024-12-05"),
      images: [
        "/images/parentreviews/anh14.png",
        "/images/parentreviews/12-2.jpg",
      ],
    },
  ],
};
