import { Box, Container } from "@mantine/core";
import PartnerContactItem from "./contai/PartnerContactItem";

export default function PartnerContact() {
  return (
    <Box
      p={50}
      bg={"var(--mantine-color-brand-5)"}
      style={{
        borderTopLeftRadius: "50px",
        borderTopRightRadius: "50px",
      }}
    >
      <Container size="xl">
        <PartnerContactItem />
      </Container>
    </Box>
  );
}
