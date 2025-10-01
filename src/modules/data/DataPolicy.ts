import { IPolicyData } from "../interface/IPolicyData";

export const policyData: IPolicyData = {
  policyHeader: {
    topic: "Chính sách & Cam kết của T-Learning",
    description:
      "Chúng tôi cam kết mang đến trải nghiệm học tập minh bạch, an toàn và hiệu quả. " +
      "Mọi thông tin cá nhân được bảo mật theo tiêu chuẩn hiện hành; học phí, nội dung khóa học, " +
      "và quyền lợi học viên đều được công khai rõ ràng. Nếu có thay đổi, chúng tôi sẽ thông báo trước " +
      "và luôn đặt quyền lợi học viên lên hàng đầu.",
  },

  policyIntroduce: {
    image: "/images/policy/anh1.png",
    description: [
      "Đạt mục tiêu đầu ra đã cam kết",
      "Đảm bảo đúng tiến độ học tập",
      "Ứng dụng kiến thức vào thực tế",
    ],
  },

  policyContents: {
    day: new Date("2021-03-01"),
    contents: [
      {
        type: "commit",
        html: `
    <div id="1" style="font-family: Inter, Roboto, system-ui, -apple-system, Segoe UI, Arial; line-height:1.7; color:#333;">
      <h2 style="margin:0 0 14px; font-size:22px; letter-spacing:.2px; color:#1d4379;">
        CAM KẾT CỦA T-LEARNING
      </h2>
    
      <!-- Tóm tắt 5 cam kết -->
      <ol style="margin:0 0 12px 22px; padding:0;">
        <li style="margin:8px 0;"><strong>Chất lượng giảng dạy:</strong> Giáo viên được tuyển chọn kỹ, theo dõi KPI lớp &amp; phản hồi định kỳ.</li>
        <li style="margin:8px 0;"><strong>Chuẩn đầu ra:</strong> Mục tiêu rõ ràng theo từng khóa; đánh giá trước/sau khóa để đo lường tiến bộ.</li>
        <li style="margin:8px 0;"><strong>Lộ trình cá nhân hóa:</strong> Tư vấn đầu vào, theo sát tiến độ, điều chỉnh phù hợp mục tiêu cá nhân.</li>
        <li style="margin:8px 0;"><strong>Minh bạch học phí:</strong> Niêm yết công khai; không phát sinh chi phí ngoài thỏa thuận.</li>
        <li style="margin:8px 0;"><strong>Hỗ trợ sau khóa:</strong> Cấp tài liệu ôn tập, tư vấn lớp tiếp nối, ưu đãi học viên cũ.</li>
      </ol>
    
      <div style="margin:14px 0 18px; padding:10px 12px; border-left:4px solid #2B8A3E; background:#F4FBF6; border-radius:6px;">
        <div style="font-weight:700; color:#2B8A3E; margin-bottom:4px;">Cam kết hoàn phí</div>
        <div style="font-size:14px;">
          Hoàn phí tương ứng nếu chất lượng dịch vụ không đúng mô tả sau khi đã tiếp nhận &amp; xác minh phản hồi. 
          Thời gian xử lý từ 3–7 ngày làm việc tuỳ phương thức thanh toán.
        </div>
      </div>
    
      <section style="margin-top:20px;">
        <h3 style="margin:0 0 8px; font-size:18px; color:#0f3460;">1) Cam kết chất lượng đầu ra</h3>
        <p style="margin:6px 0 10px;">Chúng tôi đảm bảo học viên được học đúng trọng tâm, phù hợp trình độ và mục tiêu, với kiểm tra/đánh giá minh bạch.</p>
    
        <h4  id="1.1" style="margin:12px 0 6px; font-size:16px; color:#1d4379;">1.1 Thống nhất mục tiêu ngay từ đầu</h4>
        <ul style="margin:0 0 10px 20px;">
          <li>Xác định <strong>KPI đầu ra</strong> (điểm số/kỹ năng) và mốc thời gian.</li>
          <li>Lập kế hoạch học theo tuần, có người phụ trách theo dõi.</li>
          <li>Ghi nhận “biên bản mục tiêu” (Goal Agreement) để hai bên cùng bám sát.</li>
        </ul>
        <div style="font-size:13px; color:#475569; background:#f8fafc; padding:10px 12px; border:1px dashed #dbeafe; border-radius:6px;">
          Ví dụ: “Trong 8 tuần, đạt tối thiểu 8/10 ở 3 năng lực: nền tảng, áp dụng, trình bày”.
        </div>
    
        <h4 id="1.2" style="margin:16px 0 6px; font-size:16px; color:#1d4379;">1.2 Theo dõi &amp; báo cáo tiến độ</h4>
        <ul style="margin:0 0 10px 20px;">
          <li><strong>Báo cáo tuần/tháng</strong> gồm điểm checkpoint, nhận xét của GV, khuyến nghị ôn tập.</li>
          <li>Phụ huynh/học viên có thể xem dashboard tiến độ, lịch sử điểm và tài liệu đã giao.</li>
          <li>Tổ chức <em>review</em> định kỳ 1–1 khi tiến độ chậm hoặc mục tiêu thay đổi.</li>
        </ul>
        <div style="display:flex; gap:10px; flex-wrap:wrap; margin:8px 0;">
          <div style="flex:1; min-width:220px; background:#fff7ed; border:1px solid #fed7aa; border-radius:6px; padding:10px;">
            <div style="font-weight:600; color:#9a3412; margin-bottom:4px;">Checkpoint</div>
            <div style="font-size:13px;">Bài ngắn 15–20’ để đo mức độ hiểu; có đáp án &amp; nhận xét chi tiết.</div>
          </div>
          <div style="flex:1; min-width:220px; background:#f1f5f9; border:1px solid #e2e8f0; border-radius:6px; padding:10px;">
            <div style="font-weight:600; color:#0f172a; margin-bottom:4px;">Dashboard</div>
            <div style="font-size:13px;">Tổng hợp buổi học, điểm, tài liệu; cảnh báo khi vắng hoặc tụt tiến độ.</div>
          </div>
        </div>
    
        <h4 id="1.3" style="margin:16px 0 6px; font-size:16px; color:#1d4379;">1.3 Không đạt mục tiêu → kích hoạt hỗ trợ</h4>
        <ul style="margin:0 0 10px 20px;">
          <li><strong>Bù buổi/điều chỉnh lộ trình</strong> miễn phí cho phần còn thiếu.</li>
          <li>Đổi giảng viên/phương pháp nếu phát hiện chưa phù hợp phong cách học.</li>
          <li>Ưu tiên sắp xếp lịch linh hoạt để bắt kịp tiến độ chung của lớp.</li>
        </ul>
        <div style="margin:10px 0 0; padding:10px 12px; border-left:4px solid #ef4444; background:#fff1f2; border-radius:6px;">
          <div style="font-weight:700; color:#b91c1c;">Trường hợp đặc biệt</div>
          <div style="font-size:13px;">Sự cố sức khoẻ/thi cử sát ngày → hỗ trợ bảo lưu ngắn hạn và dàn trải lại bài tập.</div>
        </div>
      </section>
    </div>
    `,
        menu: {
          id: 1,
          code: "1",
          label: "Cam kết của T-Learning",
          items: [
            { id: 111, code: "1.1", label: "Thống nhất mục tiêu ngay từ đầu" },
            { id: 112, code: "1.2", label: "Theo dõi & báo cáo tiến độ" },
            {
              id: 113,
              code: "1.3",
              label: "Không đạt mục tiêu → kích hoạt hỗ trợ",
            },
          ],
        },
      },

      {
        type: "policy",
        html: `
    <div id="2" style="font-family: Inter, Roboto, system-ui, -apple-system, Segoe UI, Arial; line-height:1.7; color:#333;">
      <h2 style="margin:0 0 14px; font-size:22px; letter-spacing:.2px; color:#1d4379;">
        CHÍNH SÁCH DÀNH CHO HỌC VIÊN
      </h2>
    
      <!-- Nhóm chính: Tuyển chọn & đánh giá GV (menu 1 cấp trỏ thẳng h4: 2.1 / 2.2 / 2.3) -->
      <section style="margin:0 0 16px;">
        <h3 style="margin:0 0 8px; font-size:18px; color:#0f3460;">1) Tuyển chọn &amp; đánh giá giảng viên</h3>
        <p style="margin:6px 0 10px;">Giảng viên trải qua sàng lọc hồ sơ, dạy thử, theo dõi KPI và đánh giá định kỳ đa chiều.</p>
    
        <h4 id="2.1" style="margin:10px 0 6px; font-size:16px; color:#1d4379;">2.1 Tiêu chí hồ sơ</h4>
        <ul style="margin:0 0 10px 20px;">
          <li>Bằng cấp/kinh nghiệm phù hợp nội dung giảng dạy; minh chứng kết quả học viên.</li>
          <li>Năng lực thiết kế lộ trình, xây dựng hoạt động luyện tập theo mục tiêu.</li>
          <li>Kỹ năng giao tiếp, làm việc với phụ huynh/học viên; thái độ chuyên nghiệp.</li>
        </ul>
    
        <h4 id="2.2" style="margin:12px 0 6px; font-size:16px; color:#1d4379;">2.2 Phỏng vấn &amp; dạy demo</h4>
        <ul style="margin:0 0 10px 20px;">
          <li>Đánh giá khả năng truyền đạt, xử lý tình huống lớp học, quản lý thời lượng.</li>
          <li>Chấm demo theo rubric: rõ mục tiêu – phương pháp – kiểm tra kết quả – phản hồi.</li>
          <li>Yêu cầu bài tập/đề cương minh hoạ cho 1–2 tuần đầu tiên.</li>
        </ul>
    
        <h4 id="2.3" style="margin:12px 0 6px; font-size:16px; color:#1d4379;">2.3 KPI định kỳ</h4>
        <div style="display:flex; gap:10px; flex-wrap:wrap; margin:6px 0 10px;">
          <div style="flex:1; min-width:220px; background:#f8fafc; border:1px solid #e2e8f0; border-radius:6px; padding:10px;">
            <div style="font-weight:600; margin-bottom:4px;">Duy trì lớp</div>
            <div style="font-size:13px;">Tỷ lệ đi học ổn định &amp; mức độ tham gia của học viên.</div>
          </div>
          <div style="flex:1; min-width:220px; background:#fff7ed; border:1px solid #fed7aa; border-radius:6px; padding:10px;">
            <div style="font-weight:600; margin-bottom:4px;">Tiến bộ học tập</div>
            <div style="font-size:13px;">Điểm checkpoint/bài tập, chất lượng dự án/ứng dụng thực tế.</div>
          </div>
          <div style="flex:1; min-width:220px; background:#f0fdf4; border:1px solid #bbf7d0; border-radius:6px; padding:10px;">
            <div style="font-weight:600; margin-bottom:4px;">Hài lòng HV/PH</div>
            <div style="font-size:13px;">Khảo sát định kỳ &amp; phản hồi sau từng mô-đun.</div>
          </div>
        </div>
      </section>
    
      <!-- Các chính sách khác (nội dung dài thêm) -->
      <section id="2.4" style="margin:12px 0 0;">
        <h4 style="margin:0 0 8px; font-size:16px; color:#1d4379;">2.4 Quy định thanh toán &amp; hoàn phí</h4>
        <ul style="margin:0 0 10px 20px;">
          <li>Thanh toán: chuyển khoản/QR; xuất hoá đơn điện tử theo yêu cầu trong 3–5 ngày làm việc.</li>
          <li>Hoàn phí trong 07 ngày đầu nếu lớp không mở hoặc thay đổi lịch không phù hợp.</li>
          <li>Phí học liệu đã cấp không hoàn lại; trường hợp đặc biệt sẽ xem xét riêng.</li>
        </ul>
      </section>
    
      <section id="2.5" style="margin:12px 0 0;">
        <h4 style="margin:0 0 8px; font-size:16px; color:#1d4379;">2.5 Nghỉ/bù/bảo lưu</h4>
        <ul style="margin:0 0 10px 20px;">
          <li>Nghỉ có báo trước ≥ 24h: sắp xếp bù/ghép buổi tương đương; cung cấp tài liệu &amp; ghi chú.</li>
          <li>Nghỉ không báo trước: tính là đã học; hỗ trợ tài liệu ôn tập.</li>
          <li>Bảo lưu: tối đa 03 tháng/khóa khi có lý do chính đáng (minh chứng kèm theo).</li>
        </ul>
      </section>
    
      <section id="2.6" style="margin:12px 0 0;">
        <h4 style="margin:0 0 8px; font-size:16px; color:#1d4379;">2.6 Bảo mật &amp; sử dụng dữ liệu</h4>
        <p style="margin:6px 0 10px;">
          Dữ liệu học viên chỉ dùng cho quản lý lớp, chăm sóc học tập, theo dõi kết quả; 
          được lưu trữ có mã hoá, phân quyền truy cập tối thiểu. Học viên có quyền yêu cầu xem/sửa/xoá dữ liệu.
        </p>
      </section>
    
      <div style="margin:16px 0 0; padding:10px 12px; border-left:4px solid #3070CA; background:#F7FAFF; border-radius:6px;">
        <div style="font-weight:700; color:#3070CA; margin-bottom:4px;">Lưu ý</div>
        <div style="font-size:14px;">Mọi yêu cầu hỗ trợ vui lòng liên hệ học vụ trước ít nhất 24h để được sắp xếp.</div>
      </div>
    </div>
    `,
        menu: {
          id: 2,
          code: "2",
          label: "Chính sách vận hành T-Learning",
          items: [
            { id: 211, code: "2.1", label: "Tiêu chí hồ sơ" },
            { id: 212, code: "2.2", label: "Phỏng vấn & dạy demo" },
            { id: 213, code: "2.3", label: "KPI định kỳ" },
            { id: 214, code: "2.4", label: "Quy định thanh toán & hoàn phí" },
            { id: 215, code: "2.5", label: "Nghỉ/bù/bảo lưu" },
            { id: 216, code: "2.6", label: "Bảo mật & sử dụng dữ liệu" },
          ],
        },
      },
    ],
  },
};
