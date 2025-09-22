import { Box, Group, Stack, Text } from "@mantine/core";
import { IconStar } from "@tabler/icons-react";

interface MyTitleProps {
  topic: string;
  index?: boolean;
  color?: string;
  colorText?: string;
}

export default function MyTitle({
  topic,
  index = false,
  color = "var(--mantine-color-brand-5)",
  colorText = "#333",
}: MyTitleProps) {
  return (
    <Group justify={index ? "flex-start" : "center"} mb={40}>
      <div>
        <Text
          display={"inline-block"}
          style={{ textTransform: "uppercase" }}
          c={colorText}
          fz={35}
          fw={700}
          mb={8}
        >
          {topic}
        </Text>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "100%",
            gap: "8px",
          }}
        >
          <div
            style={{
              flex: 1,
              height: "1px",
              backgroundColor: color,
              maxWidth: "90px",
            }}
          />
          <IconStar size={22} color={color} />
          <div
            style={{
              flex: 1,
              height: "1px",
              backgroundColor: color,
              maxWidth: "90px",
            }}
          />
        </div>
      </div>
    </Group>
  );
}
