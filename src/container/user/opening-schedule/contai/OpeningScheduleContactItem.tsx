"use client";
import MyButton from "@/components/mybutton/MyButton";
import { Center, Stack, Text } from "@mantine/core";

export default function OpeningScheduleContactItem() {
  return (
    <Stack gap={0} c={"white"}>
      <Text fz={35} fw={700} ta={"center"}>
        Hãy nhanh chống đăng ký lớp học
      </Text>
      <Text size="xl" fw={500} ta={"center"}>
        Chọn lớp phù hợp theo trình độ và thời gian của bạn. Cập nhật lớp mới,
        số lượng chỗ trống và ưu đãi đăng ký sớm.
      </Text>
      <Center mt={15}>
        <MyButton
          size="md"
          label={"Đăng ký ngay"}
          link={"/courses-offline"}
          c="var(--mantine-color-brand-5)"
        />
      </Center>
    </Stack>
  );
}
