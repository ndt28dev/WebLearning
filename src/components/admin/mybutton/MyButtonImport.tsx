import { Button, Group, Modal, Text } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { IconUpload } from "@tabler/icons-react";
import { useEffect } from "react";

type MyProps = {
  children: React.ReactNode;
  size?: "xs" | "sm" | "md" | "lg" | "xl" | "70%" | "80%" | "90%" | "100%";
  isCheckClose: boolean;
  onAfterClose: () => void;
  onOpen: () => void;
};

export default function MyButtonImport({
  children,
  size = "xl",
  isCheckClose = false,
  onAfterClose,
  onOpen,
}: MyProps) {
  const [opened, { open, close }] = useDisclosure(false);

  const openModal = () => {
    onOpen?.();
    open();
  };

  useEffect(() => {
    if (isCheckClose && opened) {
      close();
      onAfterClose?.();
    }
  }, [isCheckClose, opened]);

  return (
    <>
      <Button
        leftSection={<IconUpload size={16} />}
        variant="light"
        color="teal"
        size="sm"
        onClick={openModal}
      >
        Import
      </Button>
      <Modal
        size={size}
        opened={opened}
        onClose={close}
        title={
          <Text size="md" fw={500}>
            Import dữ liệu
          </Text>
        }
      >
        {children}
      </Modal>
    </>
  );
}
