import { Box, Container } from "@mantine/core";
import StudentsFeelingsHeaderItem from "./contai/StudentsFeelingsHeaderItem";

export default function StudentsFeelingsHeader() {
  return (
    <Box p={50} bg={"#F3F3F5"}>
      <Container size={"xl"}>
        <StudentsFeelingsHeaderItem />
      </Container>
    </Box>
  );
}
