"use client";
import MyButton from "@/components/mybutton/MyButton";
import { Center, Stack, Text } from "@mantine/core";

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
        <MyButton
          size="md"
          label={"Nhận xét ngay"}
          link={"#"}
          variant="filled"
          c="white"
        />
      </Center>
    </Stack>
  );
}
