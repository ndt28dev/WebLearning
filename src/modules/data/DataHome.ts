import { IHome } from "../interface/IHome";

export const homeMockData: IHome = {
  bannerHomeData: {
    title: "Chinh phục tri thức cùng T-Learning",
    highlights: ["T-Learning"],
    listInfo: [
      "Phương pháp học tập cá nhân hoá giúp tiết kiệm 40% thời gian",
      "80% giảng viên là chuyên gia hàng đầu trong lĩnh vực giáo dục",
      "Kho học liệu trực tuyến với hơn 1000+ bài giảng đa dạng",
      "Ứng dụng AI để đánh giá và cải thiện kỹ năng của học viên",
      "Cam kết đầu ra rõ ràng, uy tín hơn 10 năm",
    ],
    buttonList: [
      {
        label: "Đăng ký học thử",
        link: "/register",
        radius: "sm",
        variant: "filled",
        size: "md",
      },
      {
        label: "Xem lịch khai giảng",
        link: "/courses",
        radius: "sm",
        variant: "outline",
        size: "md",
      },
    ],
    images: [
      "/images/banner/anh1.jpg",
      "/images/banner/anh5.jpg",
      "/images/banner/anh2.jpg",
      "/images/banner/anh4.jpg",
    ],
    imageStudent: "/images/banner/hero-image.png",
    numStudent: 50234,
    partner: [
      "https://upload.wikimedia.org/wikipedia/commons/4/4a/Logo_education.svg",
      "https://upload.wikimedia.org/wikipedia/commons/0/0e/University_of_Oxford_logo.svg",
    ],
  },
  featureBoxData: [
    {
      title: "Chất lượng đào tạo",
      description: "Giảng viên giàu kinh nghiệm, giáo trình chuẩn quốc tế.",
    },
    {
      title: "Học tập linh hoạt",
      description: "Hỗ trợ học trực tuyến & trực tiếp, phù hợp mọi nhu cầu.",
    },
    {
      title: "Cam kết đầu ra",
      description:
        "Theo sát lộ trình học, đảm bảo kết quả học viên đạt mục tiêu.",
    },
  ],
  trainingProgramData: {
    topic: "CHƯƠNG TRÌNH ĐÀO TẠO",
    trainingPrograms: [
      {
        id: 1,
        title: "PHÁT TRIỂN TƯ DUY VẬT LÝ THPT",
        description:
          "Giúp học sinh nắm vững kiến thức Vật lý, phát triển tư duy logic và kỹ năng giải bài tập từ cơ bản đến nâng cao.",
        image: "/images/traning/physics.jpg",
        price: 3000000,
        totalTime: "30 buổi (60 giờ)",
        day: "Thứ 2 - Thứ 4 - Thứ 6",
        startTime: "18:30",
        endTime: "20:00",
        startDate: new Date("2025-12-29"),
      },
      {
        id: 2,
        title: "PHÁT TRIỂN TƯ DUY TOÁN CẤP THCS",
        description:
          "Dành cho học sinh lớp 6, 7, 8, 9 nhằm nâng cao khả năng tư duy logic và xử lý bài toán hiệu quả.",
        image: "/images/traning/math-middle.jpg",
        price: 2500000,
        totalTime: "25 buổi (50 giờ)",
        day: "Thứ 3 - Thứ 5",
        startTime: "18:00",
        endTime: "19:30",
        startDate: new Date("2025-9-24"),
      },
      {
        id: 3,
        title: "LUYỆN THI TỐT NGHIỆP THPT",
        description:
          "Cung cấp kiến thức nền tảng và kỹ năng xử lý đề thi tối ưu cho kỳ thi THPT Quốc gia.",
        image: "/images/traning/university-exam.jpg",
        price: 4500000,
        totalTime: "40 buổi (80 giờ)",
        day: "Thứ 2 - Thứ 3 - Thứ 5 - Thứ 7 -  Chủ Nhật",
        startTime: "19:00",
        endTime: "21:00",
        startDate: new Date("2025-9-25"),
      },
      {
        id: 4,
        title: "LUYỆN THI VÀO LỚP 10",
        description:
          "Khóa học Toán - Ngữ Văn - Tiếng Anh dành cho học sinh lớp 9 chuẩn bị thi vào lớp 10 công lập và trường chuyên.",
        image: "/images/traning/grade10.jpg",
        price: 3200000,
        totalTime: "28 buổi (56 giờ)",
        day: "Thứ 7 - Chủ Nhật",
        startTime: "08:00",
        endTime: "10:00",
        startDate: new Date("2025-10-12"),
      },
      {
        id: 5,
        title: "BỒI DƯỠNG KIẾN THỨC TIỂU HỌC",
        description:
          "Bồi dưỡng kiến thức Toán, Tiếng Việt và phát triển tư duy cho học sinh cấp Tiểu học.",
        image: "/images/traning/primary.jpg",
        price: 2000000,
        totalTime: "20 buổi (40 giờ)",
        day: "Thứ 3 - Thứ 5",
        startTime: "17:00",
        endTime: "18:30",
        startDate: new Date("2025-11-1"),
      },
      {
        id: 6,
        title: "KHÓA TIỀN TIỂU HỌC",
        description:
          "Khóa học đặc biệt dành cho trẻ 5-6 tuổi, phát triển kỹ năng mềm, kiến thức nền tảng và tư duy logic trước khi vào lớp 1.",
        image: "/images/traning/pre-primary.jpg",
        price: 1500000,
        totalTime: "15 buổi (30 giờ)",
        day: "Thứ 7",
        startTime: "09:00",
        endTime: "10:30",
        startDate: new Date("2025-12-25"),
      },
    ],
  },
  introduceData: {
    topic: "GIỚI THIỆU",
    images: [
      "/images/banner/intro2.jpg",
      "/images/banner/intro1.jpg",
      "/images/banner/intro3.jpg",
    ],
    title: "Trung tâm T-Learning",
    highlights: ["T-Learning"],
    description: [
      "T-Learning là nền tảng giáo dục trực tuyến hiện đại, mang đến môi trường học tập linh hoạt và hiệu quả cho mọi lứa tuổi. Chúng tôi kết nối học viên với đội ngũ giảng viên giàu kinh nghiệm, từ các môn học phổ thông đến ngoại ngữ và kỹ năng mềm. Với hệ thống quản lý lớp học trực quan, tài liệu phong phú và công cụ hỗ trợ thông minh, học viên dễ dàng theo dõi tiến trình, làm bài tập và nhận phản hồi nhanh chóng, giúp việc học trở nên tiện lợi và hiệu quả hơn.",
      "Không chỉ cung cấp kiến thức nền tảng, T-Learning còn chú trọng phát triển tư duy độc lập, khả năng sáng tạo và kỹ năng ứng dụng thực tiễn. Với triết lý “Học để trưởng thành, học để thay đổi”, chúng tôi cam kết đổi mới không ngừng, áp dụng công nghệ hiện đại và phương pháp giảng dạy tiên tiến, nhằm mang đến trải nghiệm học tập toàn diện, nuôi dưỡng niềm đam mê và thúc đẩy sự phát triển bền vững cho mỗi học viên.",
    ],
  },
  tutorData: {
    topic: "ĐỘI NGŨ gia SƯ",
    tutors: [
      {
        id: 1,
        name: "Nguyễn Văn An",
        subjects: ["Toán học THPT", "Giải tích", "Hình học"],
        image: "/images/tutors/avt1.jpg",
        description:
          "Thạc sĩ Toán học, có hơn 8 năm kinh nghiệm giảng dạy và luyện thi đại học. Phương pháp giảng dạy logic, dễ hiểu, giúp học sinh xây dựng nền tảng vững chắc.",
        experience: "8 năm giảng dạy, 5 năm luyện thi đại học.",
        university: "Đại học Sư phạm Hà Nội",
        degree: "Thạc sĩ Toán học",
        examScore: "28.5 điểm trung học phổ thông",
        certificateName: "Chứng chỉ IELTS 7.0",
        admissionImage: "/images/tutors/anh1.jpg",
      },
      {
        id: 2,
        name: "Trần Thị Minh",
        subjects: ["Vật lý THCS", "Vật lý THPT", "Cơ học"],
        image: "/images/tutors/avt2.jpg",
        description:
          "Cử nhân Vật lý, với 6 năm giảng dạy tại các trung tâm luyện thi. Được học viên đánh giá cao nhờ cách truyền đạt trực quan, dễ hiểu, gắn liền với thực tiễn.",
        experience: "6 năm giảng dạy, 3 năm luyện thi học sinh giỏi.",
        university: "Đại học Quốc gia Hà Nội",
        degree: "Cử nhân Vật lý",
        examScore: "27.0 điểm trung học phổ thông",
        certificateName: "Chứng chỉ TOEIC 900",
        admissionImage: "/images/tutors/anh2.jpg",
      },
      {
        id: 3,
        name: "Lê Hoàng Nam",
        subjects: ["Tiếng Anh giao tiếp", "IELTS", "Ngữ pháp nâng cao"],
        image: "/images/tutors/avt3.jpg",
        description:
          "Tốt nghiệp ngành Ngôn ngữ Anh, chứng chỉ IELTS 8.0. Có kinh nghiệm giảng dạy Tiếng Anh giao tiếp và luyện thi IELTS cho học sinh, sinh viên và người đi làm.",
        experience: "5 năm giảng dạy, 3 năm luyện thi IELTS.",
        university: "Đại học Hà Nội",
        degree: "Cử nhân Ngôn ngữ Anh",
        examScore: "26.5 điểm trung học phổ thông",
        certificateName: "Chứng chỉ TESOL quốc tế",
        admissionImage: "/images/tutors/anh3.jpg",
      },
      {
        id: 4,
        name: "Phạm Thị Hương",
        subjects: ["Ngữ văn THCS", "Ngữ văn THPT", "Làm văn nghị luận"],
        image: "/images/tutors/avt4.jpg",
        description:
          "Thạc sĩ Văn học, có hơn 10 năm giảng dạy. Phương pháp giảng dạy khơi gợi hứng thú, giúp học sinh cảm nhận sâu sắc văn chương và phát triển khả năng viết sáng tạo.",
        experience: "10 năm giảng dạy, 7 năm luyện thi đại học.",
        university: "Đại học KHXH & Nhân văn",
        degree: "Thạc sĩ Văn học",
        examScore: "25.5 điểm trung học phổ thông",
        certificateName: "Chứng chỉ Học sinh giỏi Văn 11",
        admissionImage: "/images/tutors/anh4.jpg",
      },
      {
        id: 5,
        name: "Đỗ Quang Khải",
        subjects: ["Hóa học THPT", "Hóa hữu cơ", "Hóa vô cơ"],
        image: "/images/tutors/avt5.jpg",
        description:
          "Cử nhân Hóa học, chuyên luyện thi khối A, B. Giảng dạy dễ hiểu, tập trung vào phương pháp giải nhanh và hệ thống hóa kiến thức.",
        experience: "7 năm giảng dạy tại các trung tâm luyện thi.",
        university: "Đại học Bách Khoa Hà Nội",
        degree: "Cử nhân Hóa học",
        examScore: "27.8 điểm trung học phổ thông",
        certificateName: "Chứng chỉ Giảng viên ưu tú 2020",
        admissionImage: "/images/tutors/anh5.jpg",
      },
      {
        id: 6,
        name: "Nguyễn Thu Trang",
        subjects: ["Sinh học THCS", "Sinh học THPT", "Di truyền học"],
        image: "/images/tutors/avt6.jpg",
        description:
          "Thạc sĩ Sinh học, kinh nghiệm giảng dạy chuyên đề Di truyền học và Sinh học phân tử. Học sinh thường đạt điểm cao trong các kỳ thi học sinh giỏi.",
        experience: "9 năm giảng dạy, 4 năm bồi dưỡng HSG.",
        university: "Đại học Khoa học Tự nhiên",
        degree: "Thạc sĩ Sinh học",
        examScore: "27.2 điểm trung học phổ thông",
        certificateName: "Chứng chỉ Học sinh giỏi Quốc gia Sinh học",
        admissionImage: "/images/tutors/anh6.jpg",
      },
      {
        id: 7,
        name: "Phạm Văn Dũng",
        subjects: ["Tin học cơ sở", "Lập trình C++", "Thuật toán"],
        image: "/images/tutors/avt7.jpg",
        description:
          "Kỹ sư CNTT, có nhiều năm kinh nghiệm dạy lập trình cho học sinh phổ thông và sinh viên. Đặc biệt chuyên về thuật toán và luyện thi học sinh giỏi Tin học.",
        experience: "6 năm giảng dạy, 3 năm huấn luyện đội tuyển Tin học.",
        university: "Đại học Công nghệ - ĐHQGHN",
        degree: "Kỹ sư Công nghệ thông tin",
        examScore: "29.0 điểm trung học phổ thông",
        certificateName: "Chứng chỉ ACM ICPC Regional",
        admissionImage: "/images/tutors/anh7.jpg",
      },
      {
        id: 8,
        name: "Hoàng Mai Anh",
        subjects: ["Địa lý THCS", "Địa lý THPT", "Kinh tế - xã hội"],
        image: "/images/tutors/avt8.jpg",
        description:
          "Cử nhân Địa lý, tận tâm với học sinh, có phương pháp giảng dạy gắn liền với thực tế. Giúp học sinh dễ dàng nắm bắt kiến thức và vận dụng vào bài thi.",
        experience: "5 năm giảng dạy, 2 năm luyện thi THPTQG.",
        university: "Đại học Sư phạm TP.HCM",
        degree: "Cử nhân Địa lý",
        examScore: "25.0 điểm trung học phổ thông",
        certificateName: "Chứng chỉ Giáo viên dạy giỏi cấp thành phố",
        admissionImage: "/images/tutors/anh8.jpg",
      },
    ],
  },
  privilegeData: {
    topic: "Quyền lợi của HỌC VIÊN T-LEARNING",
    privileges: [
      {
        title: "Học tập linh hoạt, không giới hạn",
        description:
          "Học viên có thể tham gia lớp học trực tuyến mọi lúc, mọi nơi, chỉ cần kết nối internet. Tài liệu và video bài giảng luôn sẵn sàng để ôn tập bất cứ khi nào.",
        highlights: ["Học tập"],
      },
      {
        title: "Giảng viên giàu kinh nghiệm",
        description:
          "Đội ngũ gia sư, giảng viên của T-Learning đều được tuyển chọn kỹ lưỡng, có chuyên môn cao và kinh nghiệm giảng dạy thực tế, luôn tận tâm đồng hành cùng học viên.",
        highlights: ["giàu kinh nghiệm"],
      },
      {
        title: "Lộ trình học tập cá nhân hóa",
        description:
          "Mỗi học viên đều được xây dựng lộ trình học tập riêng dựa trên năng lực và mục tiêu, đảm bảo tiến bộ rõ rệt trong suốt quá trình học.",
        highlights: ["cá nhân hóa"],
      },
      {
        title: "Hỗ trợ học viên toàn diện",
        description:
          "T-Learning cung cấp hệ thống hỗ trợ trực tuyến, giải đáp thắc mắc nhanh chóng và luôn đồng hành cùng học viên để đạt kết quả tốt nhất.",
        highlights: ["Hỗ trợ"],
      },
    ],
  },
  studentResultsData: {
    topic: "Thành tích học sinh tiêu biểu",
    studentResults: [
      {
        id: "1",
        name: "Nguyễn Văn Anh",
        className: "9A1",
        schoolName: "THCS Nguyễn Trãi",
        result: "HSG lớp 2",
        avatar: "/images/student/avt1.jpg",
      },
      {
        id: "2",
        name: "Trần Thái Bảo",
        className: "9A3",
        schoolName: "THCS Lê Hồng Phong",
        result: "HSG lớp 10",
        avatar: "/images/student/avt2.jpg",
      },
      {
        id: "3",
        name: "Lê Văn Chương",
        className: "9B2",
        schoolName: "THCS Chu Văn An",
        result: "HSG lớp 6",
        avatar: "/images/student/avt3.jpg",
      },
      {
        id: "4",
        name: "Phạm Thị Dung",
        className: "9C1",
        schoolName: "THCS Nguyễn Du",
        result: "HSG lớp 9",
        avatar: "/images/student/avt4.jpg",
      },
      {
        id: "5",
        name: "Hoàng Minh Đức",
        className: "9A5",
        schoolName: "THCS Trần Quốc Toản",
        result: "HSG lớp 8",
        avatar: "/images/student/avt5.jpg",
      },
      {
        id: "6",
        name: "Đỗ Thảo Vy",
        className: "9B4",
        schoolName: "THCS Phan Chu Trinh",
        result: "HSG lớp 7",
        avatar: "/images/student/avt6.jpg",
      },
    ],
  },
  partnerData: {
    topic: "Đối tác đồng hành",
    partners: [
      {
        id: 1,
        name: "Trường THCS Nguyễn Trãi",
        image: "/images/partner/anh1.jpg",
      },
      {
        id: 2,
        name: "Trường THCS Lê Hồng Phong",
        image: "/images/partner/anh2.jpg",
      },
      {
        id: 3,
        name: "Trường THCS Chu Văn An",
        image: "/images/partner/anh3.jpg",
      },
      {
        id: 4,
        name: "Trường THCS Nguyễn Du",
        image: "/images/partner/anh4.jpg",
      },
    ],
  },
  newsAndEventsData: {
    topic: "Tin tức & Sự kiện",
    newsAndEvents: [
      {
        id: 1,
        title:
          "Khai giảng năm học mới 2025 - 2026 với sự tham gia của đông đảo phụ huynh và học sinh toàn trường",
        imageCover: "/images/newsandevents/anh5.jpg",
      },
      {
        id: 2,
        title:
          "Học sinh trường THCS Nguyễn Trãi xuất sắc đạt giải Nhất trong kỳ thi Toán học cấp quốc gia năm 2025",
        imageCover: "/images/newsandevents/anh1.jpg",
      },
      {
        id: 3,
        title:
          "Lễ kỷ niệm 20 năm thành lập trường THCS Nguyễn Trãi diễn ra long trọng với nhiều hoạt động ý nghĩa và sôi nổi",
        imageCover: "/images/newsandevents/anh2.jpg",
      },
      {
        id: 4,
        title:
          "Hội thảo hướng nghiệp cho học sinh khối 9 nhằm định hướng nghề nghiệp tương lai và lựa chọn khối thi phù hợp",
        imageCover: "/images/newsandevents/anh3.jpg",
      },
    ],
  },
  parentReviewsData: {
    topic: "Cảm nhận của học viên",
    studentReviews: [
      {
        id: 1,
        name: "Nguyễn Thị Hoa",
        school: "THCS Lê Quý Đôn – Q.3",
        description:
          "Giáo viên cực kỳ tận tâm, theo sát từng tiến độ của con và luôn phản hồi rất nhanh cho phụ huynh. Mỗi buổi học đều có mục tiêu rõ ràng và bảng tổng kết những gì con đã nắm. Sau 2 tháng, điểm số tăng rõ rệt và quan trọng hơn là con hình thành thói quen tự học, biết đặt câu hỏi và chủ động xin thêm bài luyện. Trung tâm còn có báo cáo hằng tuần giúp gia đình theo dõi sát tiến độ.",
        star: 5,
        avt: "/images/parentreviews/avt1.jpg",
        day: new Date("2024-10-01"),
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
      },
    ],
  },
  scheduleConsultationData: {
    topic: "Đặt lịch tư vấn",
    title: "Chinh phục học sinh giỏi cùng T-Learning",
    description:
      "Chọn khung giờ phù hợp để đội ngũ T-Learning liên hệ tư vấn lộ trình học, chương trình và học phí. Mỗi phiên kéo dài ~30–45 phút qua điện thoại hoặc Google Meet.",
    image: "/images/scheduleConsultation/bgr1.png",
    morning: ["08:00 – 09:00", "09:00 – 10:00", "10:00 – 11:00"],
    afternoon: ["13:00 – 14:00", "14:00 – 15:00", "15:00 – 16:00"],
    evening: ["18:00 – 19:00", "19:00 – 20:00", "20:00 – 21:00"],
  },
};
