import { Container, Stack } from "@mantine/core";
import CourseListOffline from "./contai/CourseListOffline";
import CourseFindOffline from "./contai/CourseFindOffline";

export default function CourseOffline() {
  return (
    <Container pt={50} pb={50} size={"xl"}>
      {/* <div ref={targetRef} /> */}

      <Stack gap={10}>
        <CourseFindOffline />
        <CourseListOffline />
      </Stack>
    </Container>
  );
}
