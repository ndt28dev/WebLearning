"use client";
import MyButton from "@/components/mybutton/MyButton";
import { Button, Center, Stack, Text } from "@mantine/core";

export default function StudentsFeelingsContactItem() {
  return (
    <Stack gap={0} c={"var(--mantine-color-brand-5)"}>
      <Text fz={35} fw={700} ta={"center"}>
        Hãy để lại cảm nhận cho chúng tôi
      </Text>
      <Text size="xl" fw={500} ta={"center"}>
        Mỗi phản hồi đều giúp T-Learning nâng chuẩn chất lượng và đồng hành cùng
        gia đình tốt hơn
      </Text>
      <Center mt={15}>
        <Button
          component="a"
          href="https://zalo.me/0764513977"
          target="_blank"
          rel="noopener noreferrer"
          size="md"
          radius="md"
          variant="filled"
          color="var(--mantine-color-brand-5)"
        >
          <Text c="white" size={"md"}>
            Nhận xét ngay
          </Text>
        </Button>
      </Center>
    </Stack>
  );
}
