"use client";
import { courseOfflinesData } from "@/modules/data/DataCourseOffline";
import { courseOnlinesData } from "@/modules/data/DataCourseOnline";
import { ICourseOffline } from "@/modules/interface/ICourseOffline";
import { ICourseOnline } from "@/modules/interface/ICourseOnline";
import {
  Box,
  Button,
  Card,
  Center,
  Flex,
  Grid,
  Group,
  Menu,
  Pagination,
  Stack,
  Text,
} from "@mantine/core";
import { MonthPickerInput } from "@mantine/dates";
import {
  IconCheck,
  IconMessageCircle,
  IconPhoto,
  IconSettings,
} from "@tabler/icons-react";
import { useMemo, useState } from "react";
import "dayjs/locale/vi";
import "@/styles/client/openingschedule/OpeningScheduleContai.scss";
import OpeningScheduleItemCourseOff from "./OpeningScheduleItemCourseOff";
import OpeningScheduleItemCourseOn from "./OpeningScheduleItemCourseOn";
import { useScrollIntoView } from "@mantine/hooks";
import "@/styles/client/course/CourseList.scss";

export default function OpeningScheduleContai() {
  const dataCourseOff: ICourseOffline[] = courseOfflinesData;
  const dataCourseOn: ICourseOnline[] = courseOnlinesData;

  const [status, setStatus] = useState<boolean>(true);

  const [page, setPage] = useState<number>(1);
  const totalProducts = 6;
  const pageSize = Math.max(1, totalProducts || 0);
  const totalPagesOff = Math.ceil((dataCourseOff?.length ?? 0) / pageSize);
  const totalPagesOn = Math.ceil((dataCourseOn?.length ?? 0) / pageSize);

  const courseOfflineData = useMemo(() => {
    const start = (page - 1) * pageSize;
    const end = start + pageSize;
    return (dataCourseOff ?? []).slice(start, end);
  }, [dataCourseOff, page, pageSize]);

  const courseOnlineData = useMemo(() => {
    const start = (page - 1) * pageSize;
    const end = start + pageSize;
    return (dataCourseOn ?? []).slice(start, end);
  }, [dataCourseOn, page, pageSize]);

  const handleOffline = () => {
    setStatus(!status);
  };

  const handleOnline = () => {
    setStatus(!status);
  };

  const { scrollIntoView, targetRef } = useScrollIntoView<HTMLDivElement>({
    offset: 80,
    duration: 200,
  });

  const handlePageChange = (p: number) => {
    setPage(p);
    scrollIntoView();
  };

  const renderFind = () => (
    <Flex align={"center"} justify={"space-between"}>
      <Group gap={10}>
        <Text fz={25} fw={600} ta={"left"} c={"var(--mantine-color-brand-5)"}>
          Lịch khai giảng
        </Text>
        <MonthPickerInput
          placeholder="Chọn tháng - năm"
          locale="vi-VN"
          w={140}
          minDate={new Date()}
          className="mp"
          popoverProps={{
            classNames: { dropdown: "mp-dropdown" },
          }}
          defaultValue={new Date()}
          classNames={{
            calendarHeader: "mp-header",
            calendarHeaderControl: "mp-header-ctl",
          }}
          getMonthControlProps={() => ({ className: "mp-month" })}
        />
      </Group>
      <Group gap={10}>
        <Button
          size="md"
          radius={"xl"}
          variant={status ? "filled" : "outline"}
          color="var(--mantine-color-brand-5)"
          c={status ? "white" : "var(--mantine-color-brand-5)"}
          onClick={handleOffline}
        >
          Offline
        </Button>
        <Button
          size="md"
          radius={"xl"}
          variant={status === false ? "filled" : "outline"}
          color="var(--mantine-color-brand-5)"
          c={status === false ? "white" : "var(--mantine-color-brand-5)"}
          onClick={handleOnline}
        >
          Online
        </Button>
      </Group>
    </Flex>
  );

  const renderListCourseOff = () => (
    <>
      <Grid>
        {courseOfflineData.map((item) => (
          <Grid.Col span={{ base: 12, md: 4 }} key={item.id}>
            <OpeningScheduleItemCourseOff item={item} />
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
          total={totalPagesOff}
          value={page}
          onChange={handlePageChange}
        />
      </Center>
    </>
  );
  const renderListCourseOn = () => (
    <>
      <Grid>
        {courseOnlineData.map((item) => (
          <Grid.Col span={{ base: 12, md: 4 }} key={item.id}>
            <OpeningScheduleItemCourseOn item={item} />
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
          total={totalPagesOn}
          value={page}
          onChange={handlePageChange}
        />
      </Center>
    </>
  );
  return (
    <Stack gap={10}>
      {renderFind()}
      <div ref={targetRef} />
      {status ? renderListCourseOff() : renderListCourseOn()}
    </Stack>
  );
}
