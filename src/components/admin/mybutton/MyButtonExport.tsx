import { Button, Group, Modal, Text } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { IconDownload } from "@tabler/icons-react";
import { useEffect } from "react";

type MyProps = {
  onClick: () => void;
};

export default function MyButtonExport({ onClick }: MyProps) {
  return (
    <>
      <Button
        leftSection={<IconDownload size={16} />}
        variant="light"
        color="grape"
        size="sm"
        onClick={onClick}
      >
        Export
      </Button>
    </>
  );
}
