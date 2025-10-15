import { Box, Container } from "@mantine/core";
import ContactSupportItem from "./contai/ContactSupportItem";

export default function ContactSupport() {
  return (
    <Box pt={20} pb={50}>
      <Container size={"xl"}>
        <ContactSupportItem />
      </Container>
    </Box>
  );
}
