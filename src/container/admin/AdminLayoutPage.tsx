"use client";
import Header from "@/components/admin/header/Header";
import NavbarNested from "@/components/admin/navbar/NavbarNested";
import { menuAdmin } from "@/modules/data/Data";
import { IMenuSelected } from "@/modules/interface/IMenuLink";
import {
  ActionIcon,
  Anchor,
  Box,
  Breadcrumbs,
  Button,
  CopyButton,
  Flex,
  Group,
  Paper,
  Stack,
  Text,
  Title,
  useComputedColorScheme,
  useMantineTheme,
} from "@mantine/core";
import { IconArrowBack } from "@tabler/icons-react";
import { usePathname } from "next/navigation";

function findLabel(menu: any[], current: string): string | null {
  for (const item of menu) {
    // match link
    if (item.link && current.startsWith(item.link)) {
      return item.label;
    }

    // duyệt sâu nếu có menu con
    if (item.links?.length) {
      const found = findLabel(item.links, current);
      if (found) return found;
    }
  }
  return null;
}

export function findLabelByPath(menu: any[], pathname: string): string {
  const current = pathname.replace("/admin/", "");
  return findLabel(menu, current) ?? "Tổng quan";
}

export default function AdminLayoutPage({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const title = findLabelByPath(menuAdmin, pathname);
  const computedColorScheme = useComputedColorScheme("light", {
    getInitialValueInEffect: true,
  });

  return (
    <Flex direction="column" style={{ height: "100vh" }}>
      <Header title="Quản lý hệ thống T-Learning" />

      <Flex style={{ flex: 1, overflow: "hidden" }}>
        <NavbarNested menu={menuAdmin} />

        <Paper
          shadow="none"
          withBorder={false}
          radius={0}
          style={{ flex: 1, overflowY: "auto", marginLeft: "320px" }}
          bg={computedColorScheme === "light" ? "#F1F3F5" : ""}
          p={"sm"}
        >
          <Stack gap={12} flex={1} miw={0}>
            <Flex
              pb={12}
              w={"100%"}
              style={{ borderBottom: "1px solid var(--mantine-color-gray-3)" }}
              align={"center"}
              justify={"space-between"}
            >
              <Group gap={16} align="center">
                <ActionIcon variant="light" size={"xl"} color="brand.5">
                  <IconArrowBack size={24} stroke={2} />
                </ActionIcon>
                <Title order={3}>{title}</Title>
              </Group>
            </Flex>
            <Stack gap={12} flex={1} miw={0}>
              {children}
            </Stack>
          </Stack>
        </Paper>
      </Flex>
    </Flex>
  );
}
