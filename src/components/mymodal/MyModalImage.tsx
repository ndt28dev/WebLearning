import { Flex, Image, Modal, Text } from "@mantine/core";

interface MyModalImageProps {
  opened: boolean;
  close: () => void;
  image: string;
}

export default function MyModalImage({
  opened,
  close,
  image,
}: MyModalImageProps) {
  return (
    <Modal
      opened={opened}
      onClose={close}
      zIndex={10000}
      size={"lg"}
      title={
        <Flex align={"center"} gap={5}>
          <Image
            radius="md"
            h="35px"
            w="auto"
            fit="contain"
            src="/images/logo/logo.png"
          />
          <Text size="md" fw={500} c={"var(--mantine-color-brand-5)"}>
            T-Learning
          </Text>
        </Flex>
      }
    >
      <Image src={image} alt="it's me" radius={"md"} maw={"100%"} fit="cover" />
    </Modal>
  );
}
