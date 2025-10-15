import { Box, Container } from "@mantine/core";
import ContactMapItem from "./contai/ContactMapItem";

export default function ContactMap() {
  return (
    <Box p={50}>
      <Container size={"xl"}>
        <ContactMapItem />
      </Container>
    </Box>
  );
}
