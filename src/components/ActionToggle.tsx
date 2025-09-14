import { IconMoon, IconSun } from "@tabler/icons-react";
import {
  ActionIcon,
  Group,
  useComputedColorScheme,
  useMantineColorScheme,
} from "@mantine/core";
import { useEffect, useState } from "react";

export function ActionToggle() {
  const { setColorScheme } = useMantineColorScheme();
  const computedColorScheme = useComputedColorScheme("light", {
    getInitialValueInEffect: true,
  });

  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <Group justify="center">
      <ActionIcon
        onClick={() =>
          setColorScheme(computedColorScheme === "light" ? "dark" : "light")
        }
        variant="default"
        size="lg"
        radius="md"
        aria-label="Toggle color scheme"
      >
        {mounted &&
          (computedColorScheme === "light" ? (
            <IconMoon stroke={1.5} />
          ) : (
            <IconSun stroke={1.5} />
          ))}
      </ActionIcon>
    </Group>
  );
}
