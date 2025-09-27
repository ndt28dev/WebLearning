"use client";
import { Grid } from "@mantine/core";
import CourseItemOffline from "./CourseItemOffline";
import { courseOfflinesData } from "@/modules/data/DataCourseOffline";

export default function CourseListOffline() {
  return (
    <Grid>
      {courseOfflinesData.map((item) => (
        <Grid.Col span={{ base: 12, md: 4 }} key={item.id}>
          <CourseItemOffline item={item} />
        </Grid.Col>
      ))}
    </Grid>
  );
}
