import { Box, Container } from "@mantine/core";
import Partner from "./contai/Partner";

export default function PartnerHome() {
  return (
    <Box
      style={{
        background:
          "linear-gradient(to bottom, rgba(255,255,255,0) 0%, var(--mantine-color-brand-2) 100%)",
      }}
    >
      <Container size={"lg"}>
        <Partner />
      </Container>
    </Box>
  );
}
