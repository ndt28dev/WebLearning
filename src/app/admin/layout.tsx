"use client";
import { Grid, Card, Paper, Flex } from "@mantine/core";
import { menuAdmin } from "../../modules/data/Data";
import Header from "@/components/admin/header/Header";
import NavbarNested from "@/components/admin/navbar/NavbarNested";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
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
        >
          {children}
        </Paper>
      </Flex>
    </Flex>
  );
}
