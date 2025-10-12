import { Center, Grid, Pagination } from "@mantine/core";
import CourseItemOnline from "./CourseItemOnline";
import { ICourseOnline } from "@/modules/interface/ICourseOnline";
import { useMemo, useState } from "react";
import { courseOnlinesData } from "@/modules/data/DataCourseOnline";

type Props = { onJumpTop?: () => void };

export default function CourseListOnline({ onJumpTop }: Props) {
  const data: ICourseOnline[] = courseOnlinesData;
  const [page, setPage] = useState<number>(1);
  const totalProducts = 4;
  const pageSize = Math.max(1, totalProducts || 0);
  const totalPages = Math.ceil((data?.length ?? 0) / pageSize);

  const courseOfflineData = useMemo(() => {
    const start = (page - 1) * pageSize;
    const end = start + pageSize;
    return (data ?? []).slice(start, end);
  }, [data, page, pageSize]);
  const handlePageChange = (p: number) => {
    setPage(p);
    onJumpTop?.();
  };
  return (
    <>
      <Grid>
        {courseOfflineData.map((item) => (
          <Grid.Col span={{ base: 12, md: 6 }} key={item.id}>
            <CourseItemOnline item={item} />
          </Grid.Col>
        ))}
      </Grid>
      <Center mt={20} className="course-pagination">
        <Pagination
          color="brand"
          classNames={{
            control: "control",
            dots: "dots",
          }}
          total={totalPages}
          value={page}
          onChange={handlePageChange}
        />
      </Center>
    </>
  );
}
