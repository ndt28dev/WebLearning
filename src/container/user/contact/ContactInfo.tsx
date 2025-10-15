import { Box, Container } from "@mantine/core";
import ContactInfoItem from "./contai/ContactInfoItem";

export default function ContactInfo() {
  return (
    <Box p={50} bg={"var(--mantine-color-brand-0)"}>
      <Container size={"xl"}>
        <ContactInfoItem />
      </Container>
    </Box>
  );
}
