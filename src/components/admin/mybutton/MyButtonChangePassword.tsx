import { ActionIcon, Button, Modal, Text } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { IconKey } from "@tabler/icons-react";
import { useEffect } from "react";

type MyProps = {
  children: React.ReactNode;
  size?: "xs" | "sm" | "md" | "lg" | "xl";
  isCheckClose?: boolean;
  onAfterClose?: () => void;
  disabled?: boolean;
};

export default function MyButtonChangePassword({
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
      <ActionIcon color="orange" variant="light" onClick={open}>
        <IconKey size={16} />
      </ActionIcon>
      <Modal
        opened={opened}
        onClose={close}
        size={size}
        title={<Text fw={600}>Thay đổi mật khẩu</Text>}
      >
        {children}
      </Modal>
    </>
  );
}
