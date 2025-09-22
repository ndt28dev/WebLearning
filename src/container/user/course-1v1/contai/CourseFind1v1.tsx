"use client";
import { ActionIcon, Flex, Group, Modal, Text, ThemeIcon } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { IconAdjustments, IconFilter } from "@tabler/icons-react";

export default function CourseFind1v1() {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <>
      <Flex align={"center"} justify={"space-between"}>
        <Text fz={30}>Danh Sách Gia Sư</Text>

        <ActionIcon
          variant="filled"
          color={"var(--mantine-color-brand-5)"}
          size="lg"
          onClick={open}
        >
          <IconAdjustments size={30} stroke={1.5} color="white" />
        </ActionIcon>
      </Flex>

      <Modal
        opened={opened}
        onClose={close}
        title={
          <Text fz={20} fw={600}>
            Bộ tìm kiếm nâng cao
          </Text>
        }
        zIndex={1000}
      >
        123312
      </Modal>
    </>
  );
}
