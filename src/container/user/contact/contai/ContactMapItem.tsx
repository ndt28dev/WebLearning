"use client";
import {
  AspectRatio,
  Button,
  Card,
  Flex,
  Group,
  Stack,
  Text,
} from "@mantine/core";
import { IconMap } from "@tabler/icons-react";

export default function ContactMapItem() {
  const lat = 10.7601278933644;
  const lng = 106.6822904818337;
  const embedSrc = `https://www.google.com/maps?q=${lat},${lng}&hl=vi&z=15&output=embed`;
  const externalLink = `https://www.google.com/maps?q=${lat},${lng}`;

  return (
    <Card radius="sm" p={0} bg={"none"}>
      <Flex justify="space-between" align={"center"} mb={10}>
        <Stack gap={0}>
          <Text size="xl" fw={700}>
            Địa chỉ liên hệ Toà nhà
          </Text>
          <Text size="md">
            273 An Dương Vương, Phường, Chợ Quán, Hồ Chí Minh
          </Text>
        </Stack>
        <Button
          component="a"
          href={externalLink}
          target="_blank"
          rel="noopener noreferrer"
          variant="light"
          leftSection={<IconMap size={18} />}
          color="var(--mantine-color-brand-5)"
          radius="md"
          size="md"
        >
          <Text size="md">Xem bản đồ lớn</Text>
        </Button>
      </Flex>
      <AspectRatio ratio={16 / 9}>
        <iframe
          src={embedSrc}
          style={{ border: 0, borderRadius: 8 }}
          loading="lazy"
          allowFullScreen
          referrerPolicy="no-referrer-when-downgrade"
        />
      </AspectRatio>
    </Card>
  );
}
