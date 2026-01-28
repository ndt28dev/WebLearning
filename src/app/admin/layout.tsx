import { Paper, Flex } from "@mantine/core";
import { menuAdmin } from "../../modules/data/Data";
import Header from "@/components/admin/header/Header";
import NavbarNested from "@/components/admin/navbar/NavbarNested";
import AdminLayoutPage from "@/container/admin/AdminLayoutPage";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <AdminLayoutPage>{children}</AdminLayoutPage>;
}
