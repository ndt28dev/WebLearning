"use client";
import { courseOfflinesData } from "@/modules/data/DataCourseOffline";
import { courseOnlinesData } from "@/modules/data/DataCourseOnline";
import { ICourseOffline } from "@/modules/interface/ICourseOffline";
import { ICourseOnline } from "@/modules/interface/ICourseOnline";
import {
  Box,
  Button,
  Card,
  Flex,
  Grid,
  Group,
  Menu,
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
import { useState } from "react";
import "dayjs/locale/vi";
import "@/styles/client/openingschedule/OpeningScheduleContai.scss";

export default function OpeningScheduleContai() {
  const [value, setValue] = useState<[string | null, string | null]>([
    null,
    null,
  ]);

  const dataCourseOff: ICourseOffline[] = courseOfflinesData;
  const dataCourseOn: ICourseOnline[] = courseOnlinesData;

  const [status, setStatus] = useState<boolean>(true);

  const handleOffline = () => {
    setStatus(!status);
  };

  const handleOnline = () => {
    setStatus(!status);
  };

  const renderFind = () => (
    <Flex align={"center"} justify={"space-between"}>
      <Group gap={10}>
        <Text fz={25} fw={600} ta={"left"} c={"var(--mantine-color-brand-5)"}>
          Lịch khai giảng
        </Text>
        <MonthPickerInput
          type="range"
          placeholder="Chọn tháng - năm"
          locale="vi-VN"
          value={value}
          onChange={setValue}
          w={240}
          minDate={new Date()}
          className="mp"
          popoverProps={{
            classNames: { dropdown: "mp-dropdown" },
          }}
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
    <Grid>
      {dataCourseOff.map((item) => (
        <Grid.Col span={{ base: 12, md: 6 }} key={item.id}>
          <Card p={"xs"} key={item.id}></Card>
        </Grid.Col>
      ))}
    </Grid>
  );
  const renderListCourseOn = () =>
    dataCourseOn.map((item) => <Card p={"xs"} key={item.id}></Card>);
  return (
    <Stack gap={10}>
      {renderFind()}
      {renderListCourseOff()}
    </Stack>
  );
}
