"use client";

import { ActionIcon, Button, Group, Modal, Text } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { IconTrash } from "@tabler/icons-react";
import { useEffect } from "react";

type MyProps = {
  children: React.ReactNode;
  size?: "xs" | "sm" | "md" | "lg" | "xl";
  isCheckClose?: boolean;
  onAfterClose?: () => void;
};

export default function MyButtonHide({
  children,
  size = "sm",
  isCheckClose,
  onAfterClose,
}: MyProps) {
  const [opened, { open, close }] = useDisclosure(false);

  useEffect(() => {
    if (isCheckClose) {
      close();
      onAfterClose?.();
    }
  }, [isCheckClose]);

  return (
    <>
      <ActionIcon color="red" variant="light" onClick={open}>
        <IconTrash size={16} />
      </ActionIcon>

      <Modal
        opened={opened}
        onClose={close}
        size={size}
        title={<Text fw={600}>Xác nhận xoá</Text>}
      >
        {children}
      </Modal>
    </>
  );
}
