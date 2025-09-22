import { Box, Stack } from "@mantine/core";
import CourseFind1v1 from "./contai/CourseFind1v1";
import CourseList1v1 from "./contai/CourseList1v1";

export default function Course1v1() {
  return (
    <Stack gap={20}>
      <CourseFind1v1 />
      <CourseList1v1 />
    </Stack>
  );
}
