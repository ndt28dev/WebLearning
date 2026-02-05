import { ActionIcon, Modal, Text, Tooltip } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { IconTrashX } from "@tabler/icons-react";
import { useEffect } from "react";

type MyProps = {
  children: React.ReactNode;
  size?: "xs" | "sm" | "md" | "lg" | "xl";
  isCheckClose?: boolean;
  onAfterClose?: () => void;
};

export default function MyButtonDelete({
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
          <Text size="md" c={"red"}>
            Xóa vĩnh viễn
          </Text>
        }
        bg={"white"}
        style={{ border: "1px solid red" }}
      >
        <ActionIcon color="red" variant="filled" onClick={open}>
          <IconTrashX size={16} />
        </ActionIcon>
      </Tooltip>
      <Modal
        opened={opened}
        onClose={close}
        size={size}
        title={<Text fw={600}>Xác nhận xóa vĩnh viễn</Text>}
      >
        {children}
      </Modal>
    </>
  );
}
