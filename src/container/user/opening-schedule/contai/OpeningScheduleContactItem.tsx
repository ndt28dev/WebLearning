"use client";
import MyButton from "@/components/mybutton/MyButton";
import { Center, Stack, Text } from "@mantine/core";

export default function OpeningScheduleContactItem() {
  return (
    <Stack gap={0} c={"white"}>
      <Text fz={35} fw={700} ta={"center"}>
        Liên hệ với chúng tôi để nhận thêm tư vấn
      </Text>
      <Center mt={20}>
        <MyButton
          size="md"
          label={"Liên hệ ngay"}
          link={"#"}
          c="var(--mantine-color-brand-5)"
        />
      </Center>
    </Stack>
  );
}
