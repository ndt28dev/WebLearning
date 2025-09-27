import { ICourse } from "./ICourse";
import { ICity } from "./InterfaceFindClient";

export interface ICourse1v1 extends ICourse {
  subjects?: string[]; // những môn đki dạy kèm
  price?: number; // giá
  address?: ICity; // địa chỉ quận đăng kí dạy
}
