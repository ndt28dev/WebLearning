import { Flex, Group, Text } from "@mantine/core";

interface MyGroupTextProps {
  text1?: string;
  text2?: string;
  gap?: string;
  size?: string;
  fw?: number;
  icon?: React.ReactNode;
  color?: string;
  align?: string;
}

export default function MyGroupText({
  text1,
  text2,
  gap = "5",
  size = "md",
  fw = 500,
  icon,
  color,
  align = "center",
}: MyGroupTextProps) {
  return (
    <Flex align={align} gap={gap}>
      {icon}
      <Group gap={5} flex={1}>
        <Text size={size} c={color} fw={fw} ta={"left"}>
          {text1}
        </Text>
        <Text size={size} fw={fw} c={color} flex={1}>
          {text2}
        </Text>
      </Group>
    </Flex>
  );
}
