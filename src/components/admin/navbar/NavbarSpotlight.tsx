import { menuAdmin } from "@/modules/data/Data";
import {
  Badge,
  Button,
  Center,
  Flex,
  Group,
  Input,
  RemoveScroll,
  Stack,
  Text,
} from "@mantine/core";
import { Spotlight, SpotlightActionData, spotlight } from "@mantine/spotlight";
import {
  IconHome,
  IconDashboard,
  IconFileText,
  IconSearch,
} from "@tabler/icons-react";
import { useState } from "react";
import classes from "@/styles/admin/NavbarSpotlight.module.css";
import { IMenuLink } from "@/modules/interface/IMenuLink";

interface NavbarSpotlightProps {
  menu: IMenuLink[];
}

export default function NavbarSpotlight({ menu }: NavbarSpotlightProps) {
  const [query, setQuery] = useState("");

  const items = menu
    .filter((item) =>
      item.label.toLowerCase().includes(query.toLowerCase().trim())
    )
    .map((item) => (
      <Spotlight.Action key={item.label} w={"100%"} style={{ padding: "5px" }}>
        {item.link ? (
          <Flex
            align={"center"}
            justify={"space-between"}
            className={classes.navbarSpotlight}
            style={{ padding: "7px 16px", borderRadius: "5px" }}
          >
            <div style={{ flex: 1 }}>
              <Text c="black">{item.label}</Text>
              <Text opacity={0.6} size="xs">
                ({item.link})
              </Text>
            </div>
          </Flex>
        ) : (
          item.links &&
          item.links.map((it, idx) => (
            <Flex
              align={"center"}
              justify={"space-between"}
              className={classes.navbarSpotlight}
              style={{ padding: "7px 16px", borderRadius: "5px" }}
            >
              <div style={{ flex: 1 }}>
                <Text>{it.label}</Text>
                <Text opacity={0.6} size="xs">
                  ({it.link})
                </Text>
              </div>
            </Flex>
          ))
        )}
      </Spotlight.Action>
    ));

  return (
    <>
      <Input
        placeholder="Tìm kiếm (Ctrl + K)"
        leftSection={<IconSearch size={20} />}
        onClick={spotlight.open}
      />
      <Spotlight.Root radius="md" query={query} onQueryChange={setQuery}>
        <div
          style={{
            position: "sticky",
            top: 0,
            backgroundColor: "white",
            zIndex: 10,
          }}
        >
          <Spotlight.Search
            placeholder="Tìm kiếm menu..."
            leftSection={<IconSearch stroke={1.5} />}
            styles={{
              input: {
                outline: "none",
                boxShadow: "none",
                border: "none",
                borderBottom: "1px solid #ccc",
                borderRadius: 0,
                "&:focus": {
                  borderColor: "var(--mantine-color-gray-5)",
                },
              },
            }}
          />
        </div>

        <Spotlight.ActionsList className={classes.actionsList}>
          {items.length > 0 ? (
            items
          ) : (
            <Spotlight.Empty>Nothing found...</Spotlight.Empty>
          )}
        </Spotlight.ActionsList>
      </Spotlight.Root>
    </>
  );
}
