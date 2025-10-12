"use client";
import MyTitle from "@/components/client/mytitle/MyTitle";
import MyButton from "@/components/mybutton/MyButton";
import { homeMockData } from "@/modules/data/DataHome";
import { IScheduleConsultationHome } from "@/modules/interface/IHome";
import {
  Badge,
  Button,
  Flex,
  Grid,
  Group,
  Image,
  Input,
  Select,
  Stack,
  Text,
  Title,
} from "@mantine/core";
import { useState } from "react";

const purposeOptions = [
  { value: "lay-lai-goc", label: "Lấy lại căn bản" },
  { value: "cai-thien-diem", label: "Cải thiện điểm trên lớp" },
  { value: "nang-cao", label: "Nâng cao/khó hơn chương trình" },
  { value: "on-thi-hoc-ky", label: "Ôn thi giữa kỳ/cuối kỳ" },
  { value: "on-thi-10", label: "Ôn thi vào 10" },
  { value: "on-thi-thptqg", label: "Ôn thi THPT Quốc gia" },
  { value: "chung-chi", label: "Chứng chỉ (IELTS/TOEIC/HSK…)" },
  { value: "cap-toc", label: "Học cấp tốc theo deadline" },
  { value: "bo-tro-bai-tap", label: "Bổ trợ bài tập & kèm 1–1" },
];

const wantOptions = [
  { value: "lo-trinh", label: "Lộ trình cá nhân hoá" },
  { value: "giao-vien", label: "Giáo viên phù hợp (kinh nghiệm/chuyên môn)" },
  { value: "khung-gio", label: "Khung giờ trống phù hợp" },
  { value: "goi-hoc-phi", label: "Gói học & học phí phù hợp" },
  { value: "lop-phu-hop", label: "Lớp/nhóm học phù hợp trình độ" },
  { value: "test-dau-vao", label: "Bài test đầu vào miễn phí" },
  { value: "tai-lieu", label: "Tài liệu & bộ đề bám sát" },
  { value: "moc-diem", label: "Mốc điểm mục tiêu & kế hoạch đạt được" },
];

export default function ScheduleConsultation() {
  const data: IScheduleConsultationHome = homeMockData.scheduleConsultationData;
  const [timeChosen, setTimeChosen] = useState<string>(data.morning[0]);

  const renderColumnLeft = (image: string) => (
    <Image
      src={image}
      alt="schedule-consultation-error-image"
      w={"100%"}
      h={"100%"}
      style={{
        borderTopLeftRadius: "8px",
        borderBottomLeftRadius: "8px",
      }}
    />
  );
  const renderColumnRight = (data: IScheduleConsultationHome) => (
    <Stack gap={20} h={"100%"} p={"xl"} ta={"center"}>
      <Stack gap={5}>
        <Text fz={22} fw={700} c={"var(--mantine-color-brand-5)"}>
          {data.title}
        </Text>
        <Text fz={"md"}>{data.description}</Text>
      </Stack>
      <Stack gap={20}>
        <Input placeholder="Tên của bạn *" />
        <Input placeholder="Số điện thoại *" />
        <Select
          placeholder="Mục đích học của bạn?"
          data={purposeOptions}
          searchable
          clearable
          nothingFoundMessage="Không tìm thấy"
        />

        <Select
          placeholder="Gia sư bạn muốn chọn?"
          data={wantOptions}
          searchable
          clearable
          nothingFoundMessage="Không tìm thấy"
        />
      </Stack>
      <Stack gap={10} ta={"left"}>
        <Text size="lg" fw={600}>
          Thời gian bạn muốn tư vấn:{" "}
        </Text>
        <Flex gap={10} align={"center"}>
          <Text size="md" w={40}>
            Sáng:
          </Text>
          <Group gap={10}>
            {data.morning.map((item, index) => (
              <Badge
                style={{ cursor: "pointer" }}
                key={index}
                size="lg"
                variant={item === timeChosen ? "filled" : "outline"}
                color="brand.5"
                onClick={() => setTimeChosen(item)}
              >
                {item}
              </Badge>
            ))}
          </Group>
        </Flex>
        <Flex gap={10} align={"center"}>
          <Text size="md" w={40}>
            Chiều:
          </Text>
          <Group gap={10}>
            {data.afternoon.map((item, index) => (
              <Badge
                style={{ cursor: "pointer" }}
                key={index}
                size="lg"
                variant={item === timeChosen ? "filled" : "outline"}
                color="brand.5"
                onClick={() => setTimeChosen(item)}
              >
                {item}
              </Badge>
            ))}
          </Group>
        </Flex>
        <Flex gap={10} align={"center"}>
          <Text size="md" w={40}>
            Tối:
          </Text>
          <Group gap={10}>
            {data.evening.map((item, index) => (
              <Badge
                style={{ cursor: "pointer" }}
                key={index}
                size="lg"
                variant={item === timeChosen ? "filled" : "outline"}
                color="brand.5"
                onClick={() => setTimeChosen(item)}
              >
                {item}
              </Badge>
            ))}
          </Group>
        </Flex>
      </Stack>
      <MyButton
        variant="filled"
        color="var(--mantine-color-brand-5)"
        label={"Nhận tư vấn ngay"}
        link={"#"}
        size="md"
      />
    </Stack>
  );

  return (
    <Stack pt={50} pb={50} gap={5}>
      <MyTitle topic={data.topic} />
      <Grid
        bg={"white"}
        style={{
          border: "1px solid var(--mantine-color-brand-5)",
          borderRadius: 8,
        }}
      >
        <Grid.Col span={{ base: 12, md: 6 }}>
          {renderColumnLeft(data.image)}
        </Grid.Col>
        <Grid.Col span={{ base: 12, md: 6 }}>
          {renderColumnRight(data)}
        </Grid.Col>
      </Grid>
    </Stack>
  );
}
