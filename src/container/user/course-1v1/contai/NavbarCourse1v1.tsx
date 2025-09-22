import { Stack, Text } from "@mantine/core";

export default function NavbarCourse1v1() {
  return (
    <Stack gap={10} style={{ borderRadius: "10px", overflow: "hidden" }}>
      <Text
        fz={20}
        fw={600}
        bg={"var(--mantine-color-brand-5)"}
        ta={"center"}
        c={"white"}
        p={10}
      >
        Tìm kiếm gia sư
      </Text>
    </Stack>
  );
}
