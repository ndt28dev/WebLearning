import { Box, Container } from "@mantine/core";
import TeachersInteractItem from "./contai/TeachersInteractItem";

export default function TeachersInteract() {
  return (
    <Box p={50} bg={"var(--mantine-color-brand-0)"}>
      <Container size={"xl"}>
        <TeachersInteractItem />
      </Container>
    </Box>
  );
}
