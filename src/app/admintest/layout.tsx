"use client";
import { Grid, Card, Paper, Flex, Box } from "@mantine/core";
import Header from "@/components/admin/header/Header";
import { SessionProvider, useSession } from "next-auth/react";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <SessionProvider>{children}</SessionProvider>;
}
