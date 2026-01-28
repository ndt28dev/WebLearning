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
import { IMenuSelected } from "@/modules/interface/IMenuLink";

interface NavbarNestedProps {
  menu: any[];
}

export default function NavbarNested({ menu }: NavbarNestedProps) {
  const links = menu.map((item) => (
    <NavbarLinksGroup {...item} key={item.label} />
  ));

  return (
    <nav className={classes.navbar}>
      <div className={classes.header}>
        <NavbarSpotlight menu={menu} />
      </div>

      <ScrollArea className={classes.links} scrollbarSize={8}>
        <div className={classes.linksInner}>{links}</div>
      </ScrollArea>

      <div className={classes.footer}>
        <Box p={"md"}>
          <Button variant="light" w={"100%"}>
            <IconLogout size={18} />
            <Text ml="md">Đăng xuất</Text>
          </Button>
        </Box>
      </div>
    </nav>
  );
}
