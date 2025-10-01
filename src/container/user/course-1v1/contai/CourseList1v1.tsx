"use client";
import { dataCourses1v1 } from "@/modules/data/DataCourse1v1";
import { ICourse1v1 } from "@/modules/interface/Icourse1v1";
import { Box, Center, Pagination, Stack } from "@mantine/core";

import { useEffect, useMemo, useRef, useState } from "react";
import "@/styles/client/course/CourseList.scss";
import CourseItem1v1 from "./CourseItem1v1";

type Props = { onJumpTop?: () => void };

export default function CourseList1v1({ onJumpTop }: Props) {
  const data: ICourse1v1[] = dataCourses1v1;
  const [page, setPage] = useState<number>(1);
  const totalProducts = 4;
  const pageSize = Math.max(1, totalProducts || 0);
  const totalPages = Math.ceil((data?.length ?? 0) / pageSize);

  const course1v1Data = useMemo(() => {
    const start = (page - 1) * pageSize;
    const end = start + pageSize;
    return (data ?? []).slice(start, end);
  }, [data, page, pageSize]);

  const handlePageChange = (p: number) => {
    setPage(p);
    onJumpTop?.();
  };

  return (
    <Box>
      <Stack gap={10}>
        {course1v1Data.map((item, index) => (
          <CourseItem1v1 key={index} item={item} />
        ))}
      </Stack>
      <Center mt={20} className="course-pagination">
        <Pagination
          color="brand"
          radius="xl"
          classNames={{
            control: "control",
            dots: "dots",
          }}
          total={totalPages}
          value={page}
          onChange={handlePageChange}
        />
      </Center>
    </Box>
  );
}
