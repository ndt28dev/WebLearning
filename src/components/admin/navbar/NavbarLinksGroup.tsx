"use client";
import { IconChevronRight } from "@tabler/icons-react";
import {
  Box,
  Collapse,
  Group,
  Text,
  UnstyledButton,
  useMantineColorScheme,
} from "@mantine/core";
import classes from "@/styles/admin/NavbarLinksGroup.module.css";
import { useState } from "react";
import Link from "next/link";

interface LinksGroupProps {
  label: string;
  initiallyOpened?: boolean;
  link?: string;
  links?: { label: string; link: string }[];
}

export function NavbarLinksGroup({
  label,
  initiallyOpened,
  link,
  links,
}: LinksGroupProps) {
  const hasLinks = Array.isArray(links);
  const [opened, setOpened] = useState(initiallyOpened || false);

  const { colorScheme, setColorScheme } = useMantineColorScheme();
  const checkTheme = colorScheme === "light" ? true : false;

  const items = (hasLinks ? links : []).map((link) => (
    <Link
      href={`/admin/${link.link}`}
      key={link.label}
      className={classes.link}
    >
      <Text size="sm" color={checkTheme ? "black" : "#c9c9c9"}>
        {link.label}
      </Text>
    </Link>
  ));

  return (
    <>
      {hasLinks ? (
        <UnstyledButton
          onClick={() => setOpened((o) => !o)}
          className={classes.control}
        >
          <Group justify="space-between" gap={0}>
            <Box style={{ display: "flex", alignItems: "center" }} p={0}>
              <Text size="sm">{label}</Text>
            </Box>
            <IconChevronRight
              className={classes.chevron}
              stroke={1.5}
              size={16}
              style={{ transform: opened ? "rotate(-90deg)" : "none" }}
            />
          </Group>
        </UnstyledButton>
      ) : (
        <Link href={`/admin/${link}`} className={classes.control}>
          <Group justify="space-between" gap={0}>
            <Box style={{ display: "flex", alignItems: "center" }} p={0}>
              <Text size="sm">{label}</Text>
            </Box>
          </Group>
        </Link>
      )}

      {hasLinks ? <Collapse in={opened}>{items}</Collapse> : null}
    </>
  );
}
