import { INewsAndEventsData } from "../interface/INewsAndEventsData";

export const newsAndEventsData: INewsAndEventsData = {
  newsAndEventsHeader: [
    {
      image: "/images/newsandevents/imgHeader1.jpg",
      title: "Khai giảng Tháng 10/2025",
      description:
        "Mở lớp mới tất cả khối: IELTS, Toán/Lý/Hóa, ôn thi THPT. Ưu đãi sớm và quà tặng AI Chat học tập.",
    },
    {
      image: "/images/newsandevents/imgHeader2.jpg",
      title: "Lộ trình tiến đến HSG",
      description:
        "Chuyên gia T-Learning chia sẻ chiến lược Speaking–Writing và cách đặt KPI theo mốc 6–12 tuần.",
    },
  ],
  newsList: [
    {
      id: 1,
      title:
        "T-Learning khai giảng các khóa IELTS, Toán, Lý, Hóa tháng 10/2025 với ưu đãi lên đến 40% học phí",
      image: "/images/newsandevents/new2.jpg",
      description:
        "Chào đón tháng 10/2025, T-Learning chính thức khai giảng chuỗi lớp IELTS, Toán, Lý, Hóa cho học viên THCS, THPT và sinh viên. " +
        "Học viên đăng ký sớm sẽ nhận ngay ưu đãi học phí đến 40%, kèm gói AI Chat học tập hỗ trợ luyện đề và đặt câu hỏi 24/7. " +
        "Các lớp được tổ chức linh hoạt theo hình thức online và offline, bảo đảm chất lượng đầu ra đúng chuẩn cam kết trung tâm.",
      publishedAt: new Date("2025-10-10"),
    },
    {
      id: 2,
      title:
        "Workshop đặc biệt: Bí quyết đạt IELTS Speaking 7.5+ cùng chuyên gia ngôn ngữ T-Learning",
      image: "/images/newsandevents/new3.jpg",
      description:
        "T-Learning tổ chức workshop chuyên sâu về kỹ năng Speaking – phần thi được xem là khó nhất trong kỳ thi IELTS. " +
        "Học viên được thực hành trực tiếp với giảng viên đạt band 8.5+, khám phá phương pháp luyện phản xạ tự nhiên và bí quyết mở rộng ý thông minh. " +
        "Sự kiện thu hút hơn 200 học viên tham gia và nhận được phản hồi tích cực về cách hướng dẫn thực tế, dễ áp dụng.",
      publishedAt: new Date("2025-09-28"),
    },
    {
      id: 3,
      title:
        "Vinh danh 20 học viên xuất sắc đạt IELTS 7.0–8.5 trong Lễ tổng kết quý III/2025 tại T-Learning",
      image: "/images/newsandevents/new4.jpg",
      description:
        "Tại buổi lễ tổng kết quý III/2025, T-Learning đã vinh danh 20 học viên xuất sắc vượt mục tiêu đầu ra với thành tích IELTS từ 7.0 đến 8.5. " +
        "Đây là kết quả của quá trình nỗ lực học tập không ngừng cùng đội ngũ giảng viên giàu kinh nghiệm và hệ thống theo dõi tiến độ thông minh. " +
        "Buổi lễ cũng là dịp để học viên chia sẻ hành trình, bí quyết và nguồn cảm hứng lan tỏa tinh thần học tập chủ động.",
      publishedAt: new Date("2025-09-15"),
    },
    {
      id: 4,
      title: "Ra mắt T-Learning AI Chat – Trợ lý học tập 24/7",
      image: "/images/newsandevents/new5.jpg",
      description:
        "T-Learning chính thức ra mắt tính năng AI Chat – bước đột phá trong ứng dụng trí tuệ nhân tạo vào giáo dục. " +
        "Công cụ hỗ trợ giải bài tập, luyện đề IELTS và gợi ý lộ trình học cá nhân hóa, giúp học viên tiến bộ rõ rệt sau từng buổi học.",
      publishedAt: new Date("2025-08-25"),
    },
    {
      id: 5,
      title:
        "Hội thảo Phụ huynh đồng hành cùng con trong hành trình chinh phục tri thức thời đại AI",
      image: "/images/newsandevents/new6.jpg",
      description:
        "Buổi hội thảo dành riêng cho phụ huynh với chủ đề 'Đồng hành cùng con học tập hiệu quả' đã thu hút hơn 100 gia đình tham dự. " +
        "Các chuyên gia T-Learning chia sẻ về việc thiết lập mục tiêu, theo dõi thói quen học và duy trì động lực học tập cho con trẻ.",
      publishedAt: new Date("2025-08-10"),
    },
    {
      id: 6,
      title:
        "Tuyển dụng giảng viên và trợ giảng học thuật T-Learning – Mở rộng đội ngũ mùa đông 2025",
      image: "/images/newsandevents/new7.jpg",
      description:
        "T-Learning mở đợt tuyển dụng giảng viên và trợ giảng các bộ môn Toán, Anh, IELTS cho kỳ học mùa đông 2025. " +
        "Ứng viên trúng tuyển được đào tạo nội bộ, nâng cao kỹ năng sư phạm và tiếp cận công nghệ AI trong giảng dạy.",
      publishedAt: new Date("2025-10-05"),
    },
    {
      id: 7,
      title:
        "T-Learning ra mắt nền tảng học trực tuyến 3.0 với giao diện mới và công cụ KPI Tracker",
      image: "/images/newsandevents/new8.jpg",
      description:
        "Phiên bản mới T-Learning 3.0 ra mắt với nhiều cải tiến về giao diện, tốc độ và trải nghiệm học viên. " +
        "Tính năng KPI Tracker giúp học viên theo dõi tiến độ, đặt mục tiêu và nhận gợi ý tự động theo năng lực thực tế.",
      publishedAt: new Date("2025-07-20"),
    },
    {
      id: 8,
      title:
        "Khai giảng lớp Toán chuyên – Ôn thi vào trường chuyên công lập năm 2025",
      image: "/images/newsandevents/new9.jpg",
      description:
        "Lớp Toán chuyên của T-Learning dành cho học sinh lớp 8–9 đã chính thức khai giảng, tập trung tư duy giải đề và phương pháp trình bày logic. " +
        "Giáo trình được biên soạn bởi các thầy cô từ trường chuyên Lê Hồng Phong và Nguyễn Thượng Hiền.",
      publishedAt: new Date("2025-09-05"),
    },
    {
      id: 9,
      title:
        "Thử thách 30 ngày học cùng AI – Cơ hội nhận học bổng và quà tặng hấp dẫn",
      image: "/images/newsandevents/new1.jpg",
      description:
        "Chương trình '30 ngày học cùng AI' giúp học viên rèn luyện thói quen học đều đặn. " +
        "Người hoàn thành thử thách sẽ nhận học bổng 2 triệu đồng và gói luyện đề AI Chat miễn phí.",
      publishedAt: new Date("2025-08-05"),
    },
    {
      id: 10,
      title:
        "Talkshow: Học hiệu quả với công nghệ – Khi AI trở thành người bạn học tập đáng tin cậy",
      image: "/images/newsandevents/new10.jpg",
      description:
        "Buổi talkshow thu hút hơn 300 học viên, chia sẻ kinh nghiệm học với công nghệ AI. " +
        "Các chuyên gia giới thiệu công cụ AI Chat của T-Learning – giải pháp học thông minh giúp tăng 40% hiệu quả ôn luyện.",
      publishedAt: new Date("2025-07-30"),
    },
    {
      id: 11,
      title:
        "Ngày hội Kỹ năng tiếng Anh 2025 – Hợp tác cùng Đại học Ngoại ngữ TP.HCM",
      image: "/images/newsandevents/new11.jpg",
      description:
        "Ngày hội kỹ năng tiếng Anh do T-Learning phối hợp với Đại học Ngoại ngữ TP.HCM tổ chức, quy tụ hàng trăm sinh viên tham dự. " +
        "Các hoạt động Speaking Challenge, Debate và IELTS Mini Test diễn ra sôi nổi với phần quà hấp dẫn.",
      publishedAt: new Date("2025-08-30"),
    },
    {
      id: 12,
      title:
        "Ra mắt chương trình Học bổng T-Learning 2025 – Cơ hội cho 200 học viên tài năng",
      image: "/images/newsandevents/new12.jpg",
      description:
        "T-Learning khởi động chương trình học bổng năm 2025 trị giá hơn 1 tỷ đồng. " +
        "Mục tiêu khuyến khích học viên có thành tích xuất sắc và tinh thần học tập tích cực, lan tỏa giá trị tri thức.",
      publishedAt: new Date("2025-08-01"),
    },
    {
      id: 13,
      title:
        "Buổi chia sẻ nghề nghiệp: Con đường trở thành giảng viên tiếng Anh chuyên nghiệp",
      image: "/images/newsandevents/new13.jpg",
      description:
        "Chương trình hướng nghiệp do T-Learning tổ chức giúp sinh viên hiểu rõ cơ hội và thách thức của nghề giáo hiện đại. " +
        "Các giảng viên khách mời chia sẻ kinh nghiệm và kỹ năng cần có để phát triển trong lĩnh vực giáo dục ngôn ngữ.",
      publishedAt: new Date("2025-09-22"),
    },
    {
      id: 14,
      title:
        "Cập nhật tính năng Đặt lịch học tự động – Chủ động hơn trong hành trình học tập",
      image: "/images/newsandevents/new14.jpg",
      description:
        "Tính năng Đặt lịch học tự động cho phép học viên chọn, đổi buổi học và đồng bộ với AI Chat để nhận nhắc nhở. " +
        "Hệ thống được thiết kế giúp tối ưu hóa thời gian và duy trì nhịp học đều đặn.",
      publishedAt: new Date("2025-09-18"),
    },
    {
      id: 15,
      title:
        "Lễ tổng kết khóa IELTS Intensive 6.5+ – 100 học viên đạt chứng chỉ quốc tế",
      image: "/images/newsandevents/new15.jpg",
      description:
        "Khóa học IELTS Intensive 6.5+ khép lại thành công với hơn 100 học viên đạt chứng chỉ quốc tế. " +
        "Buổi lễ vinh danh diễn ra trong không khí hân hoan, ghi nhận nỗ lực và thành tựu của từng cá nhân.",
      publishedAt: new Date("2025-09-30"),
    },
    {
      id: 16,
      title:
        "Chương trình thiện nguyện 'Học để sẻ chia' – Hỗ trợ học sinh vùng cao tiếp cận tri thức",
      image: "/images/newsandevents/new16.jpg",
      description:
        "T-Learning phát động chiến dịch thiện nguyện 'Học để sẻ chia' nhằm tặng 500 suất học bổng cho học sinh vùng cao. " +
        "Sự kiện lan tỏa tinh thần yêu thương và sứ mệnh mang tri thức đến mọi miền tổ quốc.",
      publishedAt: new Date("2025-07-25"),
    },
    {
      id: 17,
      title:
        "Lớp học thử miễn phí – Khám phá phương pháp học cá nhân hóa tại T-Learning",
      image: "/images/newsandevents/new17.jpg",
      description:
        "Chương trình học thử miễn phí mở đăng ký toàn quốc, cho phép học viên trải nghiệm lớp học thực tế và đánh giá phương pháp cá nhân hóa. " +
        "Hàng trăm học viên đã tham gia và đăng ký khóa chính thức ngay sau buổi trải nghiệm.",
      publishedAt: new Date("2025-08-18"),
    },
    {
      id: 18,
      title:
        "Kỷ niệm 3 năm thành lập T-Learning – Hành trình lan tỏa tri thức và công nghệ giáo dục",
      image: "/images/newsandevents/new18.jpg",
      description:
        "Sự kiện mừng kỷ niệm 3 năm thành lập đánh dấu bước trưởng thành của T-Learning với hơn 12.000 học viên và 200 giảng viên trên toàn quốc. " +
        "Buổi lễ tri ân các đối tác, đội ngũ và học viên đã đồng hành trong suốt hành trình phát triển.",
      publishedAt: new Date("2025-07-01"),
    },
  ],
  eventsList: [
    {
      id: 1,
      title:
        "Lễ khai giảng khóa IELTS & STEM tháng 10/2025 – Khởi đầu hành trình chinh phục tri thức",
      image: "/images/newsandevents/event1.jpg",
      description:
        "T-Learning long trọng tổ chức Lễ Khai giảng tháng 10/2025 dành cho các khóa IELTS, Toán, Lý, Hóa và STEM. " +
        "Buổi lễ đánh dấu khởi đầu cho hơn 300 học viên trên toàn quốc bước vào hành trình học tập mới. " +
        "Không khí sôi nổi với các tiết mục biểu diễn, chia sẻ định hướng học tập và phần giới thiệu nền tảng AI Chat hỗ trợ học tập thông minh.",
      publishedAt: new Date("2025-10-10"),
    },
    {
      id: 2,
      title:
        "Workshop: Làm chủ kỹ năng Speaking IELTS cùng giảng viên 8.5+ – Bí quyết đạt band cao chỉ trong 6 tuần",
      image: "/images/newsandevents/event2.jpg",
      description:
        "Workshop đặc biệt giúp học viên hiểu sâu tiêu chí chấm điểm và cách luyện phản xạ nói tự nhiên. " +
        "Hơn 200 học viên đã tham dự và được giảng viên 8.5+ hướng dẫn trực tiếp, nhận lộ trình cá nhân hóa phù hợp trình độ.",
      publishedAt: new Date("2025-09-28"),
    },
    {
      id: 3,
      title:
        "Hội thảo Phụ huynh đồng hành cùng con học tập hiệu quả trong kỷ nguyên AI",
      image: "/images/newsandevents/event3.jpg",
      description:
        "Buổi hội thảo giúp phụ huynh hiểu rõ cách ứng dụng công nghệ và AI trong việc đồng hành cùng con học tập. " +
        "Các chuyên gia chia sẻ kỹ năng thiết lập mục tiêu, theo dõi thói quen học và khơi dậy động lực nội tại cho học sinh.",
      publishedAt: new Date("2025-09-15"),
    },
    {
      id: 4,
      title:
        "Class Experience Day – Trải nghiệm lớp học thử Toán & IELTS cùng giảng viên T-Learning",
      image: "/images/newsandevents/event4.jpg",
      description:
        "Sự kiện học thử miễn phí tại cơ sở T-Learning TP.HCM mang đến cho học viên cơ hội làm quen phương pháp học cá nhân hóa. " +
        "Người tham dự được kiểm tra đầu vào, tư vấn lộ trình và nhận ưu đãi học phí hấp dẫn khi đăng ký khóa chính thức.",
      publishedAt: new Date("2025-09-05"),
    },
    {
      id: 5,
      title:
        "T-Learning hợp tác cùng Đại học Ngoại ngữ TP.HCM tổ chức Ngày hội Kỹ năng tiếng Anh 2025",
      image: "/images/newsandevents/event5.jpg",
      description:
        "Ngày hội Kỹ năng tiếng Anh 2025 quy tụ hơn 500 sinh viên tham dự, với các hoạt động Speaking Challenge và IELTS Mock Test. " +
        "Sự kiện mở ra cơ hội học bổng và tạo môi trường giao lưu học thuật năng động giữa sinh viên và giảng viên.",
      publishedAt: new Date("2025-08-30"),
    },
    {
      id: 6,
      title:
        "Ngày hội Tuyển dụng mùa đông 2025 – Gặp gỡ và định hướng nghề nghiệp cùng T-Learning",
      image: "/images/newsandevents/event6.jpg",
      description:
        "Ngày hội tuyển dụng do T-Learning tổ chức quy tụ nhiều ứng viên yêu thích giáo dục. " +
        "Các bạn được phỏng vấn trực tiếp, tham gia workshop 'Teaching Mindset' và định hướng nghề nghiệp cùng chuyên gia nhân sự.",
      publishedAt: new Date("2025-10-05"),
    },
    {
      id: 7,
      title:
        "Talkshow: Học hiệu quả với công nghệ – Khi AI trở thành người bạn học tập đáng tin cậy",
      image: "/images/newsandevents/event7.jpg",
      description:
        "Talkshow thu hút đông đảo học viên tham dự, cùng thảo luận về ứng dụng AI trong học tập hiện đại. " +
        "Diễn giả chia sẻ cách dùng AI Chat luyện đề IELTS và lên kế hoạch học hiệu quả mỗi ngày.",
      publishedAt: new Date("2025-08-12"),
    },
    {
      id: 8,
      title:
        "Chương trình thiện nguyện 'Học để sẻ chia' – Hỗ trợ học sinh vùng cao tiếp cận tri thức",
      image: "/images/newsandevents/event8.jpg",
      description:
        "Chiến dịch thiện nguyện thường niên của T-Learning nhằm mang cơ hội học tập đến học sinh vùng cao. " +
        "500 suất học bổng và thiết bị học trực tuyến đã được trao tận tay các em nhỏ tại Lào Cai và Hà Giang.",
      publishedAt: new Date("2025-07-25"),
    },
    {
      id: 9,
      title:
        "Lễ tổng kết quý III/2025 – Tôn vinh học viên đạt thành tích xuất sắc",
      image: "/images/newsandevents/event9.jpg",
      description:
        "Buổi lễ vinh danh 30 học viên đạt IELTS 7.0+ và các bạn có tiến bộ vượt bậc trong quý III. " +
        "Sự kiện truyền cảm hứng mạnh mẽ về tinh thần học tập và nỗ lực không ngừng.",
      publishedAt: new Date("2025-09-20"),
    },
    {
      id: 10,
      title:
        "Seminar: Phương pháp học Toán tư duy – Bứt phá điểm số trong kỳ thi THPT",
      image: "/images/newsandevents/event10.jpg",
      description:
        "Buổi seminar giới thiệu phương pháp học Toán logic giúp học sinh rèn luyện khả năng phân tích và giải nhanh. " +
        "Học viên được hướng dẫn trực tiếp bởi đội ngũ giáo viên top đầu và thực hành ngay tại lớp.",
      publishedAt: new Date("2025-08-22"),
    },
    {
      id: 11,
      title:
        "Orientation Day – Định hướng học tập cho học viên mới T-Learning tháng 11/2025",
      image: "/images/newsandevents/event11.jpg",
      description:
        "Sự kiện định hướng đầu khóa giúp học viên làm quen nền tảng học online, cách theo dõi KPI và thiết lập mục tiêu đầu ra. " +
        "Ban cố vấn chia sẻ kinh nghiệm xây dựng thói quen học chủ động và duy trì động lực lâu dài.",
      publishedAt: new Date("2025-11-01"),
    },
    {
      id: 12,
      title:
        "Hội thảo 'Giáo dục sáng tạo cùng công nghệ AI' – Cầu nối giữa giảng viên và học viên thời đại số",
      image: "/images/newsandevents/event12.jpg",
      description:
        "Hội thảo quy tụ hơn 100 giảng viên và học viên tham gia trao đổi về mô hình học tập sáng tạo ứng dụng AI. " +
        "T-Learning giới thiệu đề án 'Smart Class 2026' với mục tiêu nhân rộng mô hình lớp học cá nhân hóa toàn quốc.",
      publishedAt: new Date("2025-09-01"),
    },
    {
      id: 13,
      title:
        "Mini Game 'Check-in T-Learning' – Nhận quà tặng học tập và voucher ưu đãi",
      image: "/images/newsandevents/event13.jpg",
      description:
        "Sự kiện trực tuyến trên fanpage T-Learning thu hút hơn 3.000 lượt tham gia. " +
        "Người chơi chỉ cần chia sẻ cảm nhận về khóa học để có cơ hội nhận quà tặng học tập độc quyền.",
      publishedAt: new Date("2025-10-20"),
    },
    {
      id: 14,
      title:
        "Open Day T-Learning – Tham quan trung tâm và trải nghiệm lớp học demo thực tế",
      image: "/images/newsandevents/event14.jpg",
      description:
        "Sự kiện mở cửa chào đón học viên và phụ huynh đến tham quan cơ sở vật chất. " +
        "Khách tham dự được trải nghiệm mô hình lớp học cá nhân hóa và gặp gỡ đội ngũ giảng viên tận tâm.",
      publishedAt: new Date("2025-09-08"),
    },
    {
      id: 15,
      title:
        "T-Learning x EdTech Vietnam – Giới thiệu dự án công nghệ học tập mới tại Hội chợ Giáo dục 2025",
      image: "/images/newsandevents/event15.jpg",
      description:
        "T-Learning tham gia triển lãm EdTech Vietnam với gian hàng công nghệ học tập hiện đại. " +
        "Sản phẩm 'T-Learning AI Suite' được giới thiệu thu hút sự quan tâm của đông đảo khách tham quan.",
      publishedAt: new Date("2025-08-18"),
    },
    {
      id: 16,
      title:
        "Lễ kỷ niệm 3 năm thành lập T-Learning – Hành trình lan tỏa tri thức và cảm hứng học tập",
      image: "/images/newsandevents/event16.jpg",
      description:
        "Sự kiện đặc biệt đánh dấu chặng đường 3 năm phát triển của T-Learning với hơn 12.000 học viên và 250 giảng viên. " +
        "Buổi lễ tri ân các đối tác, giảng viên và học viên đã đồng hành cùng trung tâm.",
      publishedAt: new Date("2025-07-01"),
    },
    {
      id: 17,
      title:
        "Teacher Training Day – Nâng cao năng lực sư phạm và ứng dụng công nghệ trong giảng dạy",
      image: "/images/newsandevents/event17.jpg",
      description:
        "Buổi đào tạo nội bộ giúp giảng viên cập nhật xu hướng giảng dạy hiện đại, ứng dụng AI và kỹ năng quản lý lớp học hiệu quả. " +
        "Chương trình thuộc chuỗi hoạt động phát triển chuyên môn của T-Learning.",
      publishedAt: new Date("2025-10-15"),
    },
    {
      id: 18,
      title:
        "T-Learning đồng hành cùng cuộc thi Olympic Tiếng Anh học sinh THPT 2025",
      image: "/images/newsandevents/event18.jpg",
      description:
        "T-Learning là đơn vị đồng hành chuyên môn cuộc thi Olympic Tiếng Anh toàn quốc. " +
        "Hơn 1.000 thí sinh tham dự đã được hỗ trợ ôn luyện miễn phí và tư vấn chiến lược làm bài Speaking & Writing hiệu quả.",
      publishedAt: new Date("2025-08-28"),
    },
  ],
};
