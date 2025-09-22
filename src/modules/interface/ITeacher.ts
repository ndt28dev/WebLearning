export interface ITeacher {
    id: number;
    name: string;
    image: string; // ảnh chân dung
    description: string; // mô tả chi tiết
    experience: string; // kinh nghiệm giảng dạy
    university: string; // học trường nào
    degree: string; // chuyên ngành hoặc bằng cấp
    examScore?: string; // điểm thi đại học (optional)
    certificateName?: string; // tên chung chi (optional)
    admissionImage?: string; // hình ảnh đậu đại học (optional)
}