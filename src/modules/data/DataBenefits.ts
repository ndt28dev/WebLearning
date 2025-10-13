import { IBenefitsData } from "../interface/IBenefitsData";

export const benefitsData: IBenefitsData = {
  benefitsIntroduce: {
    image: "/images/benefits/bgr.jpg",
    description: [
      "Đạt mục tiêu đầu ra đã cam kết",
      "Đảm bảo đúng tiến độ học tập",
      "Ứng dụng kiến thức vào thực tế",
    ],
  },

  benefitsContent: [
    {
      id: 1,
      code: "QL01",
      title: "Học tập linh hoạt, không giới hạn",
      highlights: ["Học tập"],
      description: [
        "Học trực tuyến mọi lúc, mọi nơi—chỉ cần một thiết bị và kết nối Internet ổn định, bạn có thể tham gia lớp ngay cả khi đang di chuyển hoặc đang nghỉ giữa giờ.",
        "Không cần xáo trộn lịch cá nhân; hệ thống cho phép chọn khung giờ linh hoạt, giúp bạn cân bằng công việc, gia đình và việc học một cách chủ động.",
        "Toàn bộ tài liệu, slide và video bài giảng được lưu trữ dài hạn, hỗ trợ tua lại, đánh dấu và ghi chú để ôn tập theo đúng nhịp độ riêng của bạn.",
      ],
    },
    {
      id: 2,
      code: "QL02",
      title: "Giảng viên giàu kinh nghiệm",
      description: [
        "Đội ngũ giảng viên được tuyển chọn khắt khe, có nền tảng học thuật vững chắc và hiểu sâu đặc thù từng cấp độ, từng kỳ thi cũng như nhu cầu thực tế của học viên.",
        "Kinh nghiệm giảng dạy thực chiến giúp bài học bám sát đề thi, tình huống thực tế và các mẹo xử lý nhanh—từ phân bổ thời gian đến chiến lược làm bài hiệu quả.",
        "Giảng viên theo sát lộ trình cá nhân, phản hồi chi tiết bài tập và đưa ra khuyến nghị cụ thể để bạn cải thiện đúng trọng tâm trong thời gian ngắn nhất.",
      ],
      highlights: ["giàu kinh nghiệm"],
    },
    {
      id: 3,
      code: "QL03",
      title: "Lộ trình học tập cá nhân hóa",
      description: [
        "Lộ trình được xây dựng dựa trên bài đánh giá đầu vào và mục tiêu rõ ràng, đảm bảo mỗi buổi học đều phục vụ đúng khoảng trống kiến thức và kỹ năng cần bù đắp.",
        "Tiến độ được theo dõi bằng các mốc KPI theo tuần/tháng, giúp bạn nhìn thấy sự cải thiện cụ thể và điều chỉnh phương pháp học kịp thời khi cần thiết.",
        "Ngân hàng bài luyện thích ứng cập nhật theo hiệu suất, tự động tăng giảm độ khó để tối ưu thời gian, tránh nhàm chán và nâng cao chất lượng tiếp thu.",
      ],
      highlights: ["cá nhân hóa"],
    },
    {
      id: 4,
      code: "QL04",
      title: "Hỗ trợ học viên toàn diện",
      description: [
        "Trợ lý học tập trực tuyến sẵn sàng hỗ trợ nhanh qua chat hoặc email, tiếp nhận mọi câu hỏi về bài vở, kỹ thuật và hướng dẫn thao tác chi tiết từng bước.",
        "Phản hồi luôn rõ ràng, có ví dụ minh họa và liên kết tài liệu liên quan, giúp bạn tiết kiệm thời gian tìm kiếm và tự chủ hơn trong quá trình học.",
        "Cố vấn học tập định kỳ xem lại kết quả, đặt mục tiêu khả thi theo giai đoạn và đồng hành đến khi bạn đạt thành tích mong muốn.",
      ],
      highlights: ["Hỗ trợ"],
    },

    // ===== Bổ sung mới từ đây =====
    {
      id: 5,
      code: "QL05",
      title: "Tài nguyên học tập phong phú",
      description: [
        "Kho bài giảng dạng video, slide tương tác và ghi chú mẫu được phân loại theo chủ đề–mức độ, giúp bạn tra cứu nhanh và học theo đúng điểm yếu cần cải thiện.",
        "Ngân hàng đề luyện chuẩn hoá liên tục với đáp án – thang điểm chi tiết, kèm phân tích sai lầm thường gặp để rút kinh nghiệm ngay sau mỗi lần làm bài.",
        "Tài liệu được cập nhật định kỳ theo chương trình mới, bảo đảm nội dung luôn bám sát thực tế thi cử và yêu cầu học thuật hiện hành.",
      ],
      highlights: ["tài nguyên", "ngân hàng đề"],
    },
    {
      id: 6,
      code: "QL06",
      title: "Theo dõi tiến độ minh bạch",
      description: [
        "Bảng điều khiển trực quan hiển thị thời lượng học, chuyên cần, điểm số và tỉ lệ hoàn thành bài tập, giúp bạn nắm bức tranh tổng thể chỉ trong vài giây.",
        "Báo cáo định kỳ kèm biểu đồ xu hướng cho phép so sánh tiến bộ theo thời gian và phát hiện sớm các giai đoạn chững lại để điều chỉnh kịp thời.",
        "Thông báo tự động khi bỏ lỡ bài hoặc sắp đến hạn nộp, giảm tối đa việc quên bài và nâng cao tính tự giác trong quá trình học.",
      ],
      highlights: ["dashboard", "tiến độ"],
    },
    {
      id: 7,
      code: "QL07",
      title: "Cam kết đầu ra rõ ràng",
      description: [
        "Ngay từ đầu, mục tiêu đầu ra được chuẩn hoá bằng các mốc điểm/kỹ năng cụ thể, đi kèm lộ trình và tiêu chí đánh giá minh bạch trong hợp đồng học tập.",
        "Thi thử định kỳ với đề chuẩn hoá và phản hồi chi tiết giúp bạn đo sát năng lực trước mỗi cột mốc quan trọng, hạn chế rủi ro tâm lý khi bước vào kỳ thi thật.",
        "Chính sách hỗ trợ học bù/ôn bù và xem xét quyền lợi khi không đạt điều kiện cam kết, bảo vệ tối đa lợi ích người học trên cơ sở dữ liệu minh chứng rõ ràng.",
      ],
      highlights: ["cam kết", "đầu ra"],
    },
    {
      id: 8,
      code: "QL08",
      title: "Trải nghiệm đa nền tảng mượt mà",
      description: [
        "Ứng dụng tối ưu cho máy tính, tablet và điện thoại, đồng bộ tiến độ giữa các thiết bị để bạn có thể tiếp tục học ngay tại đoạn dở dang chỉ bằng một cú chạm.",
        "Trình phát video hỗ trợ tua nhanh, đặt điểm đánh dấu và thêm ghi chú cá nhân, giúp việc ôn luyện trở nên chủ động và có hệ thống hơn.",
        "Hệ thống hoạt động ổn định ngay cả khi băng thông thấp, hạn chế tối đa giật lag và bảo toàn chất lượng trải nghiệm học tập.",
      ],
      highlights: ["đa nền tảng", "đồng bộ"],
    },
    {
      id: 9,
      code: "QL09",
      title: "Đánh giá – phản hồi kịp thời",
      description: [
        "Bài tập chấm tự động cung cấp điểm số tức thì và giải thích hướng dẫn, giúp bạn hiểu lý do đúng–sai thay vì chỉ biết đáp án.",
        "Bài luận/bài nói nhận phản hồi thủ công từ giảng viên với rubric rõ ràng, chỉ ra điểm mạnh, điểm cần cải thiện và gợi ý cách luyện tập cụ thể.",
        "Cơ chế góp ý hai chiều cho phép bạn đề xuất chủ đề, yêu cầu nội dung bám sát nhu cầu, nâng cao mức độ phù hợp của từng buổi học.",
      ],
      highlights: ["phản hồi", "rubric"],
    },
    {
      id: 10,
      code: "QL10",
      title: "Cộng đồng năng động & cơ hội phát triển",
      description: [
        "Nhóm thảo luận theo môn và cấp độ giúp bạn đặt câu hỏi, chia sẻ mẹo học và tìm bạn đồng hành, tạo động lực duy trì nhịp học ổn định.",
        "Sự kiện định kỳ như workshop, chữa đề trực tiếp và talkshow nghề nghiệp mở rộng góc nhìn, kết nối với giảng viên – chuyên gia – cựu học viên.",
        "Chương trình học bổng và phần thưởng theo thành tích khích lệ sự tiến bộ, tạo sân chơi lành mạnh và ghi nhận nỗ lực của bạn.",
      ],
      highlights: ["cộng đồng", "sự kiện", "học bổng"],
    },
    {
      id: 11,
      code: "QL11",
      title: "Bảo mật dữ liệu & minh bạch quyền riêng tư",
      description: [
        "Dữ liệu cá nhân và kết quả học tập được mã hoá, lưu trữ an toàn theo tiêu chuẩn ngành, chỉ được truy cập bởi các bên liên quan khi có sự cho phép.",
        "Lịch sử hoạt động và thay đổi điểm số đều có log truy vết, giúp kiểm chứng minh bạch khi cần đối chiếu hoặc xử lý khiếu nại.",
        "Chính sách quyền riêng tư rõ ràng về phạm vi thu thập – sử dụng – lưu trữ, đặt quyền kiểm soát dữ liệu vào tay người học.",
      ],
      highlights: ["bảo mật", "minh bạch"],
    },
    {
      id: 12,
      code: "QL12",
      title: "Ưu đãi học phí & hỗ trợ tài chính",
      description: [
        "Nhiều gói học phù hợp ngân sách với lộ trình rõ ràng, cho phép chia nhỏ thanh toán theo kỳ để giảm áp lực tài chính trong suốt khoá học.",
        "Chính sách ưu đãi theo mùa, học bổng thành tích và mã giảm giá dành cho học viên trung thành giúp tối ưu chi phí mà vẫn đảm bảo chất lượng.",
        "Hoàn tiền theo điều kiện cụ thể trong trường hợp phát sinh bất khả kháng, minh bạch quy trình và thời hạn xử lý để bạn yên tâm đăng ký.",
      ],
      highlights: ["ưu đãi", "học phí"],
    },
  ],
};
