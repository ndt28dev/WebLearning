"use client";
import { Anchor, Breadcrumbs, Text } from "@mantine/core";
import Link from "next/link";

interface Item {
  title: string;
  href: string;
}

interface MyBreadcrumbsProps {
  items: Item[];
  c?: string;
  c1?: string;
}

export default function MyBreadcrumbs({
  items,
  c = "white",
  c1 = "white",
}: MyBreadcrumbsProps) {
  const itemsBreadcrumbs = items.map((item, index) =>
    index === items.length - 1 ? (
      <Text size="lg" c={c1}>
        {item.title}
      </Text>
    ) : (
      <Anchor href={item.href} component={Link} key={index} fz={"lg"} c={c}>
        {item.title}
      </Anchor>
    )
  );
  return (
    <Breadcrumbs separator={<span style={{ color: c }}>/</span>}>
      {itemsBreadcrumbs}
    </Breadcrumbs>
  );
}
