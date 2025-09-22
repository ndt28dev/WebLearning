import { Anchor, Breadcrumbs } from "@mantine/core";

interface Item {
  title: string;
  href: string;
}

interface MyBreadcrumbsProps {
  items: Item[];
}

export default function MyBreadcrumbs({ items }: MyBreadcrumbsProps) {
  const itemsBreadcrumbs = items.map((item, index) => (
    <Anchor href={item.href} key={index} fz={"lg"} c={"white"}>
      {item.title}
    </Anchor>
  ));
  return (
    <Breadcrumbs separator={<span style={{ color: "#fff" }}>/</span>}>
      {itemsBreadcrumbs}
    </Breadcrumbs>
  );
}
