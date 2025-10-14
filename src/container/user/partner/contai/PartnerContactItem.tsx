"use client";
import MyButton from "@/components/mybutton/MyButton";
import { Box, Center, Stack, Text } from "@mantine/core";

export default function PartnerContactItem() {
  return (
    <Stack gap={0} c={"white"}>
      <Text fz={35} fw={700} ta={"center"}>
        Kết nối nhanh – doanh thu tăng – hệ sinh thái lớn
      </Text>
      <Text size="xl" fw={500} ta={"center"}>
        Tham gia mạng lưới đối tác ngay!
      </Text>
      <Center mt={15}>
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
