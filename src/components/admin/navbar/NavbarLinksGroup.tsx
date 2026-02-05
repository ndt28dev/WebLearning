"use client";
import { IconChevronRight } from "@tabler/icons-react";
import { Collapse, Group, Text, UnstyledButton, Box } from "@mantine/core";
import classes from "@/styles/admin/NavbarLinksGroup.module.css";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import { IMenuLink } from "@/modules/interface/IMenuLink";

export function NavbarLinksGroup({
  label,
  link,
  links,
  initiallyOpened,
}: IMenuLink & { initiallyOpened?: boolean }) {
  const pathname = usePathname();
  const hasLinks = Array.isArray(links) && links.length > 0;

  const isActive = !!link && pathname === `/admin/${link}`;
  const isChildActive =
    hasLinks &&
    links!.some(
      (item) => item.link && pathname.startsWith(`/admin/${item.link}`)
    );

  const [opened, setOpened] = useState(initiallyOpened || isChildActive);

  return (
    <Box>
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
          className={clsx(classes.link, {
            [classes.active]: isActive,
          })}
        >
          <Text size="sm">{label}</Text>
        </Link>
      )}

      {hasLinks && (
        <Collapse in={opened}>
          <Box className={classes.children}>
            {links!.map((item) => (
              <NavbarLinksGroup key={item.label} {...item} />
            ))}
          </Box>
        </Collapse>
      )}
    </Box>
  );
}
