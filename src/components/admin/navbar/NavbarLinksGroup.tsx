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
import { usePathname } from "next/navigation";
import clsx from "clsx";
import { IMenuSelected } from "@/modules/interface/IMenuLink";

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
  const pathname = usePathname();
  const hasLinks = Array.isArray(links);

  const isActiveSingle = !!link && pathname === `/admin/${link}`;

  const [opened, setOpened] = useState(initiallyOpened || false);

  const items = (hasLinks ? links : []).map((item) => {
    const href = `/admin/${item.link}`;
    const active = pathname === href;

    return (
      <Link
        href={href}
        key={item.label}
        className={clsx(classes.link, {
          [classes.active]: active,
        })}
      >
        <Text size="sm">{item.label}</Text>
      </Link>
    );
  });

  return (
    <>
      {hasLinks ? (
        <UnstyledButton
          onClick={() => setOpened((o) => !o)}
          className={classes.control}
        >
          <Group justify="space-between">
            <Text size="sm">{label}</Text>
            <IconChevronRight
              className={classes.chevron}
              size={16}
              style={{ transform: opened ? "rotate(-90deg)" : undefined }}
            />
          </Group>
        </UnstyledButton>
      ) : (
        <Link
          href={`/admin/${link}`}
          className={clsx(classes.control, {
            [classes.active]: isActiveSingle,
          })}
        >
          <Text size="sm">{label}</Text>
        </Link>
      )}

      {hasLinks && <Collapse in={opened}>{items}</Collapse>}
    </>
  );
}
