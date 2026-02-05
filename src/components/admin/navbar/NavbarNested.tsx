"use client";

import {
  Box,
  Button,
  Code,
  Flex,
  Group,
  ScrollArea,
  Text,
  ThemeIcon,
} from "@mantine/core";
import { NavbarLinksGroup } from "./NavbarLinksGroup";
// import { UserButton } from "../UserButton/UserButton";
// import { Logo } from "./Logo";
import classes from "@/styles/admin/NavbarNested.module.css";
import NavbarSpotlight from "./NavbarSpotlight";
import { menuAdmin } from "@/modules/data/Data";
import { IconLogout } from "@tabler/icons-react";
import { IMenuLink, IMenuSelected } from "@/modules/interface/IMenuLink";

interface NavbarNestedProps {
  menu: IMenuLink[];
}

export default function NavbarNested({ menu }: NavbarNestedProps) {
  return (
    <nav className={classes.navbar}>
      <div className={classes.header}>
        <NavbarSpotlight menu={menu} />
      </div>

      <ScrollArea className={classes.links} scrollbarSize={8}>
        <div className={classes.linksInner}>
          {menu.map((item) => (
            <NavbarLinksGroup key={item.label} {...item} />
          ))}
        </div>
      </ScrollArea>

      <div className={classes.footer}>
        <Button variant="light" w="100%">
          Đăng xuất
        </Button>
      </div>
    </nav>
  );
}
