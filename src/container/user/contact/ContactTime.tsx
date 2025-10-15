import { Box, Container } from "@mantine/core";
import ContactTimeItem from "./contai/ContactTimeItem";

export default function ContactTime() {
  return (
    <Box pt={50}>
      <Container size={"lg"}>
        <ContactTimeItem />
      </Container>
    </Box>
  );
}
