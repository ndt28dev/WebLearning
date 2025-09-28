"use client";
import { Box, Container, Grid, Stack } from "@mantine/core";
import CourseFind1v1 from "./contai/CourseFind1v1";
import CourseList1v1 from "./contai/CourseList1v1";
import SlideBarCourse1v1 from "./contai/SlideBarCourse1v1";
import { useScrollIntoView } from "@mantine/hooks";

export default function Course1v1() {
  const { scrollIntoView, targetRef } = useScrollIntoView<HTMLDivElement>({
    offset: 80,
    duration: 200,
  });
  return (
    <Container pt={50} pb={50} size={"xl"}>
      <div ref={targetRef} />
      <Grid>
        <Grid.Col span={{ base: 12, md: 3 }} mih={"100%"}>
          <SlideBarCourse1v1 />
        </Grid.Col>
        <Grid.Col span={{ base: 12, md: 9 }}>
          <Stack gap={10}>
            <CourseFind1v1 />
            <CourseList1v1 onJumpTop={() => scrollIntoView()} />
          </Stack>
        </Grid.Col>
      </Grid>
    </Container>
  );
}
