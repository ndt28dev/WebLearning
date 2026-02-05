import { Button, Modal, Text } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { IconRestore } from "@tabler/icons-react";
import { useEffect } from "react";

type MyProps = {
  children: React.ReactNode;
  size?: "xs" | "sm" | "md" | "lg" | "xl";
  isCheckClose?: boolean;
  onAfterClose?: () => void;
  disabled?: boolean;
};

export default function MyButtonRestoreMany({
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
        leftSection={<IconRestore size={16} />}
        variant="filled"
        color="teal"
        size="sm"
        onClick={open}
        disabled={disabled}
      >
        Khôi phục đã chọn
      </Button>
      <Modal
        opened={opened}
        onClose={close}
        size={size}
        title={<Text fw={600}>Xác nhận khôi phục </Text>}
      >
        {children}
      </Modal>
    </>
  );
}
