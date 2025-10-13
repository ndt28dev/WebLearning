import { Box, Container } from "@mantine/core";
import ContactFacebook from "./contai/ContactFacebook";

export default function ContactFacebookHome() {
  return (
    <Box bg={"var(--mantine-color-brand-0)"}>
      <Container size={"xl"}>
        <ContactFacebook />
      </Container>
    </Box>
  );
}
