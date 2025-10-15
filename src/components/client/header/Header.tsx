"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import {
  Box,
  Burger,
  Button,
  Center,
  Container,
  Divider,
  Drawer,
  Group,
  Image,
  Menu,
  ScrollArea,
  Title,
  Collapse,
  useMantineTheme,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { usePathname } from "next/navigation";
import classes from "@/styles/client/Header.module.css";
import { IconChevronDown, IconPhoneCall } from "@tabler/icons-react";
import { menuHeader } from "@/modules/data/MenuHeader";

export function Header() {
  const links = menuHeader;
  const pathname = usePathname();
  const theme = useMantineTheme();

  // Drawer state
  const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] =
    useDisclosure(false);

  // Mở/đóng từng nhóm submenu trong Drawer (mobile)
  const [openedGroup, setOpenedGroup] = useState<string | null>(null);
  const toggleGroup = (key: string) =>
    setOpenedGroup((cur) => (cur === key ? null : key));

  // helper: đường dẫn đang active nếu trùng hoặc là prefix (để khớp /news và /news/123)
  const isActivePath = (href: string) =>
    pathname === href || pathname.startsWith(href + "/");

  // helper: mục cha active nếu chính nó khớp hoặc có ít nhất 1 mục con khớp
  const isParentActive = (link: (typeof links)[number]) =>
    isActivePath(link.link) ||
    (link.links?.some((child) => isActivePath(child.link)) ?? false);

  const desktopItems = useMemo(
    () =>
      links.map((link) => {
        const menuItems = link.links?.map((item) => (
          <Menu.Item
            key={item.link}
            component={Link}
            href={item.link}
            className={classes.subLink}
            // dùng data-active để CSS module bắt style active
            data-active={isActivePath(item.link) || undefined}
            style={{ fontSize: 16 }}
          >
            {item.label}
          </Menu.Item>
        ));

        if (menuItems?.length) {
          return (
            <Menu
              key={link.label}
              trigger="hover"
              transitionProps={{ exitDuration: 0 }}
              withinPortal
              zIndex={1000}
            >
              <Menu.Target>
                <Link
                  href={link.link}
                  className={classes.link}
                  data-active={isParentActive(link) || undefined}
                  style={{ fontSize: 16 }}
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
            data-active={isActivePath(link.link) || undefined}
            style={{ fontSize: 16 }}
          >
            {link.label}
          </Link>
        );
      }),
    [links, pathname]
  );

  return (
    <>
      <header className={classes.header}>
        <Container size="xl" className={classes.inner} p={5}>
          <Link href="/">
            <Image
              radius="md"
              h={56}
              w="auto"
              fit="contain"
              src="/images/logo/logo.png"
              alt="T-Learning"
            />
          </Link>

          <Group gap={5} visibleFrom="sm">
            {desktopItems}
          </Group>

          <Group visibleFrom="sm" gap="xs">
            <Group gap={5} bg="#F3F3F5" p="xs" style={{ borderRadius: 30 }}>
              <IconPhoneCall size={22} color="#63605e" />
              <span style={{ color: "#63605e" }}>Hotline: </span>
              <Title order={5}>0764 513 977</Title>
            </Group>
          </Group>

          <Burger
            opened={drawerOpened}
            onClick={toggleDrawer}
            size="sm"
            hiddenFrom="sm"
          />
        </Container>
      </header>

      {/* Drawer (Mobile) */}
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
            alt="T-Learning"
          />
        }
        hiddenFrom="sm"
        zIndex={1000000}
      >
        <ScrollArea h="calc(100vh - 80px)" mx="-md">
          <Divider my="sm" />

          {links.map((link) => {
            const hasChildren = !!link.links?.length;
            const groupKey = link.label;

            if (hasChildren) {
              return (
                <Box key={groupKey}>
                  <button
                    className={classes.link}
                    onClick={() => toggleGroup(groupKey)}
                    data-active={isParentActive(link) || undefined}
                    style={{ width: "100%", textAlign: "left" }}
                  >
                    <Center inline>
                      <Box component="span" mr={5}>
                        {link.label}
                      </Box>
                      <IconChevronDown
                        size={16}
                        color={theme.colors.blue[6]}
                        style={{
                          transform:
                            openedGroup === groupKey
                              ? "rotate(180deg)"
                              : "none",
                          transition: "transform .2s ease",
                        }}
                      />
                    </Center>
                  </button>

                  <Collapse in={openedGroup === groupKey}>
                    {link.links!.map((item) => (
                      <Link
                        key={item.link}
                        href={item.link}
                        className={classes.link}
                        data-active={isActivePath(item.link) || undefined}
                        onClick={closeDrawer}
                      >
                        {item.label}
                      </Link>
                    ))}
                  </Collapse>
                </Box>
              );
            }

            return (
              <Link
                key={link.link}
                href={link.link}
                className={classes.link}
                data-active={isActivePath(link.link) || undefined}
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
          </Group>
        </ScrollArea>
      </Drawer>
    </>
  );
}
