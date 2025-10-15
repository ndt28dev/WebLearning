"use client";
import MyButton from "@/components/mybutton/MyButton";
import { Box, Button, Center, Stack, Text } from "@mantine/core";

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
        <Button
          component="a"
          href="https://zalo.me/0764513977"
          target="_blank"
          rel="noopener noreferrer"
          size="md"
          radius="md"
          variant="default"
          color="white"
        >
          <Text c="var(--mantine-color-brand-5)" size={"md"}>
            Liên hệ qua Zalo
          </Text>
        </Button>
      </Center>
    </Stack>
  );
}
