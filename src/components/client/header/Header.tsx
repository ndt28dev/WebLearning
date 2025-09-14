"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Box,
  Burger,
  Button,
  Center,
  Collapse,
  Container,
  Divider,
  Drawer,
  Group,
  Image,
  Menu,
  ScrollArea,
  UnstyledButton,
  useMantineTheme,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import classes from "@/styles/client/Header.module.css";
import { IconChevronDown } from "@tabler/icons-react";
import { ActionToggle } from "@/components/ActionToggle";

type NavLink = {
  link: string;
  label: string;
  links?: { link: string; label: string }[]; // 👈 optional submenu
};

const links: NavLink[] = [
  { link: "/", label: "Trang chủ" },
  { link: "/courses", label: "Khoá học" },
  { link: "/teacher", label: "Giảng viên" },
  { link: "/blog", label: "Bài viết" },
  { link: "/contact", label: "Liên hệ" },
  {
    link: "#1",
    label: "Learn",
    links: [
      { link: "/docs", label: "Documentation" },
      { link: "/resources", label: "Resources" },
      { link: "/community", label: "Community" },
      { link: "/blog", label: "Blog" },
    ],
  },
];

export function Header() {
  const [active, setActive] = useState(links[0].link);
  const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] =
    useDisclosure(false);
  const [linksOpened, { toggle: toggleLinks }] = useDisclosure(false);
  const theme = useMantineTheme();

  const items = links.map((link) => {
    const menuItems = link.links?.map((item) => (
      <Menu.Item
        key={item.link}
        component={Link}
        href={item.link}
        onClick={() => setActive(link.link)}
      >
        {item.label}
      </Menu.Item>
    ));

    if (menuItems) {
      return (
        <Menu
          key={link.label}
          trigger="hover"
          transitionProps={{ exitDuration: 0 }}
          withinPortal
        >
          <Menu.Target>
            <Link
              href={link.link}
              className={classes.link}
              data-active={active === link.link || undefined}
              onClick={() => setActive(link.link)}
            >
              <Center>
                <span className={classes.linkLabel}>{link.label}</span>
                <IconChevronDown size={14} stroke={1.5} />
              </Center>
            </Link>
          </Menu.Target>
          <Menu.Dropdown>{menuItems}</Menu.Dropdown>
        </Menu>
      );
    }

    return (
      <Link
        key={link.label}
        href={link.link}
        className={classes.link}
        data-active={active === link.link || undefined}
        onClick={() => setActive(link.link)}
      >
        {link.label}
      </Link>
    );
  });

  return (
    <>
      <header className={classes.header}>
        <Container size="lg" className={classes.inner} p={0}>
          <Image
            radius="md"
            h="100%"
            w="auto"
            fit="contain"
            src="/images/logo/logo.png"
          />
          <Group gap={5} visibleFrom="sm">
            {items}
          </Group>

          <Group visibleFrom="sm" gap={"xs"}>
            <Button variant="default">Đăng nhập</Button>
            <Button>Đăng ký</Button>
            {/* <ActionToggle /> */}
          </Group>
          <Burger
            opened={drawerOpened}
            onClick={toggleDrawer}
            size="sm"
            hiddenFrom="sm"
          />
        </Container>
      </header>
      <Drawer
        opened={drawerOpened}
        onClose={closeDrawer}
        size="100%"
        padding="md"
        title={
          <Image
            radius="md"
            h={60}
            w="auto"
            fit="contain"
            src="/images/logo/logo.png"
          />
        }
        hiddenFrom="sm"
        zIndex={1000000}
      >
        <ScrollArea h="calc(100vh - 80px)" mx="-md">
          <Divider my="sm" />

          {links.map((link) => {
            if (link.links) {
              // có submenu
              return (
                <Box key={link.label}>
                  <UnstyledButton
                    className={classes.link}
                    onClick={toggleLinks}
                  >
                    <Center inline>
                      <Box component="span" mr={5}>
                        {link.label}
                      </Box>
                      <IconChevronDown size={16} color={theme.colors.blue[6]} />
                    </Center>
                  </UnstyledButton>

                  <Collapse in={linksOpened}>
                    {link.links.map((item) => (
                      <Link
                        key={item.link}
                        href={item.link}
                        className={classes.link}
                        onClick={closeDrawer}
                      >
                        {item.label}
                      </Link>
                    ))}
                  </Collapse>
                </Box>
              );
            }

            // menu thường
            return (
              <Link
                key={link.link}
                href={link.link}
                className={classes.link}
                onClick={closeDrawer}
              >
                {link.label}
              </Link>
            );
          })}

          <Divider my="sm" />

          <Group justify="center" gap="xs">
            <Button variant="default">Đăng nhập</Button>
            <Button>Đăng ký</Button>
            <ActionToggle />
          </Group>
        </ScrollArea>
      </Drawer>
    </>
  );
}
