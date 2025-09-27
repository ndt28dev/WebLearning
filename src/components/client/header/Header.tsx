"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Badge,
  Box,
  Burger,
  Button,
  Center,
  Collapse,
  Container,
  Divider,
  Drawer,
  Flex,
  Group,
  Image,
  Menu,
  ScrollArea,
  Title,
  UnstyledButton,
  useMantineTheme,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import classes from "@/styles/client/Header.module.css";
import { IconChevronDown, IconPhoneCall } from "@tabler/icons-react";
import { ActionToggle } from "@/components/ActionToggle";
import MyButton from "@/components/mybutton/MyButton";
import { menuHeader } from "@/modules/data/MenuHeader";

export function Header() {
  const links = menuHeader;
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
        style={{ fontSize: "16px" }}
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
          zIndex={1000}
        >
          <Menu.Target>
            <Link
              href={link.link}
              className={classes.link}
              data-active={active === link.link || undefined}
              onClick={() => setActive(link.link)}
              style={{ fontSize: "16px" }}
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
        style={{ fontSize: "16px" }}
      >
        {link.label}
      </Link>
    );
  });

  return (
    <>
      <header className={classes.header}>
        <Container size="xl" className={classes.inner} p={5}>
          <Link href="/">
            <Image
              radius="md"
              h="56px"
              w="auto"
              fit="contain"
              src="/images/logo/logo.png"
            />
          </Link>
          <Group gap={5} visibleFrom="sm">
            {items}
          </Group>

          <Group visibleFrom="sm" gap={"xs"}>
            <Group gap={5} bg={"#F3F3F5"} p={"xs"} style={{ borderRadius: 30 }}>
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

          {links.map((link, idx) => {
            if (link.links) {
              // có submenu
              return (
                <Box key={idx}>
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
                    {link.links.map((item, idx) => (
                      <Link
                        key={idx}
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
            {/* <ActionToggle /> */}
          </Group>
        </ScrollArea>
      </Drawer>
    </>
  );
}
