import { Flex, Group, Text } from "@mantine/core";

interface MyGroupTextProps {
  text1?: string;
  text2?: string;
  gap?: string;
  size?: string;
  fw?: number;
  icon?: React.ReactNode;
}

export default function MyGroupText({
  text1,
  text2,
  gap = "5",
  size = "md",
  fw = 500,
  icon,
}: MyGroupTextProps) {
  return (
    <Flex align={"center"} gap={gap}>
      {icon}
      <Group gap={5} flex={1}>
        <Text size={size} fw={fw}>
          {text1}
        </Text>
        <Text size={size}>{text2}</Text>
      </Group>
    </Flex>
  );
}
