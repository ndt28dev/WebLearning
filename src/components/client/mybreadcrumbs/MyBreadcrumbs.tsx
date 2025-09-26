"use client";
import { Anchor, Breadcrumbs, Text } from "@mantine/core";
import Link from "next/link";

interface Item {
  title: string;
  href: string;
}

interface MyBreadcrumbsProps {
  items: Item[];
}

export default function MyBreadcrumbs({ items }: MyBreadcrumbsProps) {
  const itemsBreadcrumbs = items.map((item, index) =>
    index === items.length - 1 ? (
      <Text size="lg" c={"white"}>
        {item.title}
      </Text>
    ) : (
      <Anchor
        href={item.href}
        component={Link}
        key={index}
        fz={"lg"}
        c={"white"}
      >
        {item.title}
      </Anchor>
    )
  );
  return (
    <Breadcrumbs separator={<span style={{ color: "#fff" }}>/</span>}>
      {itemsBreadcrumbs}
    </Breadcrumbs>
  );
}
