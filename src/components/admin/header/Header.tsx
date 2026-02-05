"use client";
import {
  ActionIcon,
  Card,
  Flex,
  Group,
  Text,
  Tooltip,
  useComputedColorScheme,
  useMantineColorScheme,
} from "@mantine/core";
import {
  IconLayoutSidebarLeftExpand,
  IconLibraryMinus,
} from "@tabler/icons-react";
import { ActionToggle } from "@/components/ActionToggle";

interface HeaderProps {
  title: string;
}

export default function Header({ title }: HeaderProps) {
  const { setColorScheme } = useMantineColorScheme();
  const computedColorScheme = useComputedColorScheme("light", {
    getInitialValueInEffect: true,
  });

  const checkTheme = computedColorScheme === "light" ? true : false;

  return (
    <Card shadow="none" withBorder={false} radius={0} p={0}>
      <Flex
        align={"center"}
        justify={"space-between"}
        style={{
          borderBottom: `1px solid ${checkTheme ? "#ccc" : "#666"}`,
        }}
        p="sm"
      >
        <Group>
          <Tooltip label="Ẩn thanh menu" withArrow>
            <ActionIcon
              variant="default"
              radius="md"
              size="lg"
              aria-label="Ẩn thanh menu"
            >
              <IconLayoutSidebarLeftExpand size={20} />
            </ActionIcon>
          </Tooltip>

          <Tooltip label="Đóng tất cả menu" withArrow>
            <ActionIcon
              variant="default"
              radius="md"
              size="lg"
              aria-label="Đóng tất cả menu"
            >
              <IconLibraryMinus size={20} />
            </ActionIcon>
          </Tooltip>
        </Group>
        <Group>
          <Text size="md" fw={700} c={"green"}>
            {title}
          </Text>
        </Group>
        <ActionToggle />
      </Flex>
    </Card>
  );
}
