import MyLayoutUser from "@/components/client/mylayoutuser/MyLayoutUser";
import { Box } from "@mantine/core";
import Course1v1 from "./Course1v1";

export default function Course1v1Page() {
  return (
    <MyLayoutUser image="/images/course/anh1.jpg">
      <Course1v1 />
    </MyLayoutUser>
  );
}
