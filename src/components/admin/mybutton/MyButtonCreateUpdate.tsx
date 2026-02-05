import { ActionIcon, Button, Group, Modal, Text, Title } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { IconEdit, IconPlus } from "@tabler/icons-react";
import { title } from "process";
import { useEffect } from "react";

type MyProps = {
  children: React.ReactNode;
  title: string;
  size?: "xs" | "sm" | "md" | "lg" | "xl";
  isCreateUpdate?: boolean;
  onOpen: () => void;
  isCheckClose?: boolean;
  onAfterClose?: () => void;
};

export default function MyButtonCreateUpdate({
  children,
  title,
  size = "xl",
  isCreateUpdate = false,
  onOpen,
  isCheckClose = false,
  onAfterClose,
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
      {isCreateUpdate === false && (
        <Button
          leftSection={<IconPlus size={16} />}
          variant="filled"
          color="blue"
          size="sm"
          onClick={openModal}
        >
          Thêm
        </Button>
      )}
      {isCreateUpdate === true && (
        <ActionIcon color="yellow" variant="light" onClick={openModal}>
          <IconEdit size={16} />
        </ActionIcon>
      )}
      <Modal
        size={size}
        opened={opened}
        onClose={close}
        title={
          <Text size="md" fw={500}>
            {title}
          </Text>
        }
      >
        {children}
      </Modal>
    </>
  );
}
