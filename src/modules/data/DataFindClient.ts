import {
  ICity,
  IDayStudy,
  ILevelStudy,
  ISubject,
  ITimeStudy,
} from "../interface/InterfaceFindClient";

export const cities: ICity[] = [
  {
    id: 1,
    name: "Hà Nội",
    type: "Thành phố trực thuộc TW",
    districts: [
      { id: 101, name: "Ba Đình", type: "Quận" },
      { id: 102, name: "Hoàn Kiếm", type: "Quận" },
      { id: 103, name: "Đống Đa", type: "Quận" },
      { id: 104, name: "Hai Bà Trưng", type: "Quận" },
      { id: 105, name: "Cầu Giấy", type: "Quận" },
      { id: 106, name: "Thanh Xuân", type: "Quận" },
      { id: 107, name: "Bắc Từ Liêm", type: "Quận" },
      { id: 108, name: "Nam Từ Liêm", type: "Quận" },
      { id: 109, name: "Tây Hồ", type: "Quận" },
      { id: 110, name: "Long Biên", type: "Quận" },
      { id: 111, name: "Hà Đông", type: "Quận" },
      { id: 112, name: "Thanh Trì", type: "Huyện" },
      { id: 113, name: "Đông Anh", type: "Huyện" },
      { id: 114, name: "Gia Lâm", type: "Huyện" },
      { id: 115, name: "Sóc Sơn", type: "Huyện" },
      { id: 116, name: "Thường Tín", type: "Huyện" },
    ],
  },
  {
    id: 2,
    name: "TP. Hồ Chí Minh",
    type: "Thành phố trực thuộc TW",
    districts: [
      { id: 201, name: "Quận 1", type: "Quận" },
      { id: 202, name: "Quận 3", type: "Quận" },
      { id: 203, name: "Quận 4", type: "Quận" },
      { id: 204, name: "Quận 5", type: "Quận" },
      { id: 205, name: "Quận 6", type: "Quận" },
      { id: 206, name: "Quận 7", type: "Quận" },
      { id: 207, name: "Quận 8", type: "Quận" },
      { id: 208, name: "Quận 10", type: "Quận" },
      { id: 209, name: "Quận 11", type: "Quận" },
      { id: 210, name: "Quận 12", type: "Quận" },
      { id: 211, name: "Bình Thạnh", type: "Quận" },
      { id: 212, name: "Gò Vấp", type: "Quận" },
      { id: 213, name: "Phú Nhuận", type: "Quận" },
      { id: 214, name: "Bình Tân", type: "Quận" },
      { id: 215, name: "Tân Bình", type: "Quận" },
      { id: 216, name: "Tân Phú", type: "Quận" },
      { id: 217, name: "Thành phố Thủ Đức", type: "Thành phố" },
      { id: 218, name: "Hóc Môn", type: "Huyện" },
      { id: 219, name: "Bình Chánh", type: "Huyện" },
      { id: 220, name: "Nhà Bè", type: "Huyện" },
      { id: 221, name: "Củ Chi", type: "Huyện" },
      { id: 222, name: "Cần Giờ", type: "Huyện" },
    ],
  },
  {
    id: 3,
    name: "Đà Nẵng",
    type: "Thành phố trực thuộc TW",
    districts: [
      { id: 301, name: "Hải Châu", type: "Quận" },
      { id: 302, name: "Thanh Khê", type: "Quận" },
      { id: 303, name: "Sơn Trà", type: "Quận" },
      { id: 304, name: "Ngũ Hành Sơn", type: "Quận" },
      { id: 305, name: "Liên Chiểu", type: "Quận" },
      { id: 306, name: "Cẩm Lệ", type: "Quận" },
      { id: 307, name: "Hòa Vang", type: "Huyện" },
      { id: 308, name: "Hoàng Sa", type: "Huyện" },
    ],
  },
];

export const subjects: ISubject[] = [
  {
    educationalLevel: "TTH",
    subject: [
      "Toán 1",
      "Tiếng Việt",
      "Tự nhiên & Xã hội",
      "Mỹ thuật",
      "Âm nhạc",
    ],
  },
  {
    educationalLevel: "THCS",
    subject: [
      "Toán 2",
      "Ngữ văn",
      "Tiếng Anh",
      "Vật lý",
      "Hóa học",
      "Sinh học",
      "Lịch sử",
      "Địa lý",
      "Tin học",
    ],
  },
  {
    educationalLevel: "THPT",
    subject: [
      "Toán 3",
      "Ngữ văn",
      "Tiếng Anh",
      "Vật lý",
      "Hóa học",
      "Sinh học",
      "Lịch sử",
      "Địa lý",
      "GDCD",
      "Tin học",
    ],
  },
];

export const timeStudyData: ITimeStudy = {
  time: [
    "07:00",
    "08:00",
    "09:00 ",
    "10:00 ",
    "11:00 ",
    "12:00 ",
    "13:00 ",
    "14:00 ",
    "15:00",
    "16:00",
    "17:00",
    "18:00",
    "19:00",
    "20:00",
  ],
};

export const dayStudyData: IDayStudy = {
  day: ["Thứ 2", "Thứ 3", "Thứ 4", "Thứ 5", "Thứ 6", "Thứ 7", "Chủ nhật"],
};

export const levelStudyData: ILevelStudy = {
  levels: [
    "Sinh viên năm nhất",
    "Sinh viên năm 2",
    "Sinh viên năm 3",
    "Sinh viên năm cuối",
    "Thạc sĩ",
    "Tiến sĩ",
  ],
};
