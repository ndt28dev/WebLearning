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
} from "@mantine/core";
import { IconArrowBack } from "@tabler/icons-react";
import { usePathname } from "next/navigation";

export function findLabelByPath(menu: any[], pathname: string): string {
  const current = pathname.replace("/admin/", "");

  for (const item of menu) {
    // menu cha có link
    if (item.link === current) {
      return item.label;
    }

    // menu con
    if (item.links) {
      const child = item.links.find((c: any) => c.link === current);
      if (child) {
        return child.label;
      }
    }
  }

  return "Tổng quan";
}

export default function AdminLayoutPage({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const title = findLabelByPath(menuAdmin, pathname);

  return (
    <Flex direction="column" style={{ height: "100vh" }}>
      <Header title="Hệ thống quản lý sinh viên" />

      <Flex style={{ flex: 1, overflow: "hidden" }}>
        <NavbarNested menu={menuAdmin} />

        <Paper
          shadow="none"
          withBorder={false}
          radius={0}
          style={{ flex: 1, overflowY: "auto", marginLeft: "320px" }}
          p="sm"
          bg={"#F1F3F5"}
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
              <Box w={"100%"}>{children}</Box>
            </Stack>
          </Stack>
        </Paper>
      </Flex>
    </Flex>
  );
}
