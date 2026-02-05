import { ActionIcon, Button, Modal, Text } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import {
  IconTrash,
  IconTrashFilled,
  IconTrashX,
  IconTrashXFilled,
} from "@tabler/icons-react";
import { useEffect } from "react";

type MyProps = {
  children: React.ReactNode;
  size?: "xs" | "sm" | "md" | "lg" | "xl" | "70%" | "80%" | "90%" | "100%";
  isCheckClose?: boolean;
  onAfterClose?: () => void;
  title?: string;
};

export default function MyButtonHistoryTrash({
  children,
  size,
  isCheckClose,
  onAfterClose,
  title,
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
      <Button
        leftSection={<IconTrashXFilled size={16} />}
        variant="filled"
        color="gray"
        size="sm"
        onClick={open}
      >
        Thùng rác
      </Button>

      <Modal
        opened={opened}
        onClose={close}
        size={size}
        title={<Text fw={600}>Danh sách {title} đã xoá</Text>}
      >
        {children}
      </Modal>
    </>
  );
}
