"use client";
import { Container, Grid, Stack } from "@mantine/core";
import { useScrollIntoView } from "@mantine/hooks";
import SlideBarCourseOnline from "./contai/SlideBarCourseOnline";
import CourseFindOnline from "./contai/CourseFindOnline";
import CourseListOnline from "./contai/CourseListOnline";

export default function CourseOnline() {
  const { scrollIntoView, targetRef } = useScrollIntoView<HTMLDivElement>({
    offset: 80,
    duration: 200,
  });
  return (
    <Container pt={50} pb={50} size={"xl"}>
      <div ref={targetRef} />
      <Grid>
        <Grid.Col span={{ base: 12, md: 3 }}>
          <SlideBarCourseOnline />
        </Grid.Col>
        <Grid.Col span={{ base: 12, md: 9 }}>
          <Stack gap={10}>
            <CourseFindOnline />
            <CourseListOnline onJumpTop={() => scrollIntoView()} />
          </Stack>
        </Grid.Col>
      </Grid>
    </Container>
  );
}
