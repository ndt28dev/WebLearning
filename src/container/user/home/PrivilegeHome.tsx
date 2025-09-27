import { Box, Container } from "@mantine/core";
import Privilege from "./contai/Privilege";

export default function PrivilegeHome() {
  return (
    <Box
      style={{
        backgroundColor: "var(--mantine-color-brand-0)",
      }}
    >
      <Container size={"xl"}>
        <Privilege />
      </Container>
    </Box>
  );
}
