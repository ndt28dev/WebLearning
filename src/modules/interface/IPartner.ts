export interface IDetailsPartner {
  address?: string;
  phone?: string;
  website?: string; // URL (string)
  contactPerson?: string; // Người liên hệ + vai trò
  since?: Date; // Thời điểm bắt đầu hợp tác
  cooperationAreas?: string[]; // Các mảng hợp tác chính
  description?: string; // Mô tả ngắn
  image?: string;
}

export interface IPartner {
  id?: number;
  name?: string;
  image?: string;
  detailsPartner?: IDetailsPartner;
}
