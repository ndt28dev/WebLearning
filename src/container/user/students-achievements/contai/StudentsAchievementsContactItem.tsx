"use client";
import MyButton from "@/components/mybutton/MyButton";
import { Center, Stack, Text } from "@mantine/core";

export default function StudentsAchievementsContactItem() {
  return (
    <Stack gap={0} c={"white"}>
      <Text fz={35} fw={700} ta={"center"}>
        Cùng con chạm danh hiệu T-Learning
      </Text>
      <Text size="xl" fw={500} ta={"center"}>
        Nhận tư vấn 1:1 miễn phí: đánh giá năng lực đầu vào, gợi ý lộ trình cá
        nhân hoá, đặt KPI theo mốc thời gian cụ thể
      </Text>
      <Center mt={15}>
        <MyButton
          size="md"
          label={"Đăng ký tư vấn miễn phí"}
          link={"/contact"}
          c="var(--mantine-color-brand-5)"
        />
      </Center>
    </Stack>
  );
}
