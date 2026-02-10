import { ActionIcon, Modal, Text, Tooltip } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { IconTrash, IconTrashX } from "@tabler/icons-react";
import { useEffect } from "react";

type MyProps = {
  children: React.ReactNode;
  size?: "xs" | "sm" | "md" | "lg" | "xl";
  isCheckClose?: boolean;
  onAfterClose?: () => void;
  isHasTrashX?: boolean;
};

export default function MyButtonDelete({
  children,
  size = "sm",
  isCheckClose = false,
  onAfterClose,
  isHasTrashX = false,
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
      {isHasTrashX ? (
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
      ) : (
        <ActionIcon color="red" variant="light" onClick={open}>
          <IconTrash size={16} />
        </ActionIcon>
      )}
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
