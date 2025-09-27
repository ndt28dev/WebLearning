"use client";
import {
  ActionIcon,
  Flex,
  Group,
  Input,
  Modal,
  Text,
  Tooltip,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { IconAdjustments, IconSearch } from "@tabler/icons-react";

export default function CourseFindOffline() {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <>
      <Flex align={"center"} justify={"space-between"}>
        <Text fz={25}>Danh Sách Lớp Học Offline</Text>
        <Group gap={10}>
          <Tooltip
            label="Bộ tìm kiếm"
            color="var(--mantine-color-brand-5)"
            variant="light"
            position="right"
          >
            <ActionIcon
              variant="filled"
              color={"var(--mantine-color-brand-5)"}
              size="lg"
              onClick={open}
            >
              <IconAdjustments size={30} stroke={1.5} color="white" />
            </ActionIcon>
          </Tooltip>
        </Group>
      </Flex>
      <Modal
        size={"xl"}
        opened={opened}
        onClose={close}
        title={
          <Group gap={10}>
            <Text fz={18} fw={500}>
              Bộ tìm kiếm nhanh
            </Text>
            <Input
              w={400}
              radius={"sm"}
              placeholder="Nhập dữ liệu tìm kiếm..."
              rightSection={<IconSearch size={20} />}
              styles={{
                input: { fontSize: 16, color: "#333" },
              }}
            />
          </Group>
        }
        zIndex={1000}
      >
        123
      </Modal>
    </>
  );
}
