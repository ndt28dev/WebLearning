import { Box, Container } from "@mantine/core";
import StudentsFeelingsItem from "./contai/StudentsFeelingsItem";

export default function StudentsFeelingsList() {
  return (
    <Box p={50}>
      <Container size={"xl"}>
        <StudentsFeelingsItem />
      </Container>
    </Box>
  );
}
