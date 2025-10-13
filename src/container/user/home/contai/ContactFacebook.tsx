"use client";
import MyButton from "@/components/mybutton/MyButton";
import { Button, Center, Stack, Text } from "@mantine/core";
import { IconHandFingerRight, IconLeaf } from "@tabler/icons-react";

export default function ContactFacebook() {
  return (
    <Stack
      pt={50}
      pb={50}
      gap={10}
      ta={"center"}
      c={"var(--mantine-color-brand-5)"}
    >
      <Text size="xl">Bạn Cần Tư Vấn Thêm?</Text>
      <Text fz={30} fw={600}>
        Nhắn tin với T-Learning qua Facebook
      </Text>
      <Center>
        <Button
          component="a"
          href="https://www.facebook.com/duythuan28102002"
          target="_blank"
          rel="noopener noreferrer"
          radius="xl"
          variant="filled"
          size="md"
          color="var(--mantine-color-brand-5)"
          leftSection={<IconHandFingerRight size={20} />}
        >
          Tại đây
        </Button>
      </Center>
    </Stack>
  );
}
