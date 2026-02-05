import { ActionIcon, Button, Modal, Text, Tooltip } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { IconPlus, IconRestore } from "@tabler/icons-react";
import { useEffect } from "react";

type MyProps = {
  children: React.ReactNode;
  size?: "xs" | "sm" | "md" | "lg" | "xl";
  isCheckClose?: boolean;
  onAfterClose?: () => void;
};

export default function MyButtonRestore({
  children,
  size = "sm",
  isCheckClose = false,
  onAfterClose,
}: MyProps) {
  const [opened, { open, close }] = useDisclosure(false);

  useEffect(() => {
    if (isCheckClose && opened) {
      close();
      onAfterClose?.();
    }
  }, [isCheckClose, opened]);

  return (
    <>
      <Tooltip
        label={
          <Text size="md" c={"teal"}>
            Khôi phục
          </Text>
        }
        bg={"white"}
        style={{ border: "1px solid teal" }}
      >
        <ActionIcon color="teal" variant="filled" onClick={open}>
          <IconRestore size={16} />
        </ActionIcon>
      </Tooltip>
      <Modal
        opened={opened}
        onClose={close}
        size={size}
        title={<Text fw={600}>Xác nhận khôi phục</Text>}
      >
        {children}
      </Modal>
    </>
  );
}
