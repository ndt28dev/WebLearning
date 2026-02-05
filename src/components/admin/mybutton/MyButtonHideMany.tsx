import { Button, Group, Modal, Text } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { IconTrash } from "@tabler/icons-react";
import { useEffect } from "react";
type MyProps = {
  children: React.ReactNode;
  size?: "xs" | "sm" | "md" | "lg" | "xl";
  isCheckClose?: boolean;
  onAfterClose?: () => void;
  disabled?: boolean;
};

export default function MyButtonHideMany({
  children,
  size = "sm",
  isCheckClose,
  onAfterClose,
  disabled,
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
        leftSection={<IconTrash size={16} />}
        variant="filled"
        color="red"
        size="sm"
        onClick={open}
        disabled={disabled}
      >
        Xoá đã chọn
      </Button>
      <Modal
        opened={opened}
        onClose={close}
        size={size}
        title={<Text fw={600}>Xác nhận xoá </Text>}
      >
        {children}
      </Modal>
    </>
  );
}
