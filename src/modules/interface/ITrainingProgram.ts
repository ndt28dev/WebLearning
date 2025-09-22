export interface ITrainingProgram {
  id: number;
  title: string;
  description: string;
  image: string;
  price: number;
  totalTime: string;
  day: string; // Thứ hoặc ngày: "Thứ 2", "2024-11-14"
  startTime: string; // Giờ bắt đầu: "18:30"
  endTime: string; // Giờ kết thúc: "20:00"
  startDate: Date;
}
