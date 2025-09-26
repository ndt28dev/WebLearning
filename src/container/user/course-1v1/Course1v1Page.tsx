import MyLayoutUser from "@/components/client/mylayoutuser/MyLayoutUser";
import { Box } from "@mantine/core";
import Course1v1 from "./Course1v1";
import { title } from "process";

export default function Course1v1Page() {
  const headerData = {
    title: "Kèm 1v1 cùng gia sư",
    items: [
      {
        title: "Trang chủ",
        href: "/",
      },
      {
        title: "Kèm 1v1 cùng gia sư",
        href: "/courses-1v1",
      },
    ],
  };
  return (
    <MyLayoutUser image="/images/course/anh1.jpg" header={headerData}>
      <Course1v1 />
    </MyLayoutUser>
  );
}
