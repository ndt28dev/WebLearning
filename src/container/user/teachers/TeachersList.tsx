import { Box, Container } from "@mantine/core";
import TeachersContai from "./contai/TeachersContai";

export default function TeachersList() {
  return (
    <Box p={50} bg={"var(--mantine-color-brand-0)"}>
      <Container size={"xl"}>
        <TeachersContai />
      </Container>
    </Box>
  );
}
