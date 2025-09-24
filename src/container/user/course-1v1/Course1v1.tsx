"use client";
import { Box, Grid, Stack } from "@mantine/core";
import CourseFind1v1 from "./contai/CourseFind1v1";
import CourseList1v1 from "./contai/CourseList1v1";
import SlideBarCourse1v1 from "./contai/SlideBarCourse1v1";

export default function Course1v1() {
  return (
    <Stack gap={10}>
      <CourseFind1v1 />
      <Grid>
        <Grid.Col span={{ base: 12, md: 3 }}>
          <SlideBarCourse1v1 />
        </Grid.Col>
        <Grid.Col span={{ base: 12, md: 9 }}>
          <CourseList1v1 />
        </Grid.Col>
      </Grid>
    </Stack>
  );
}
