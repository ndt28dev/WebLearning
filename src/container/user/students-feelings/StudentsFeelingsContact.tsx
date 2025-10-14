import { Box, Container } from "@mantine/core";
import StudentsFeelingsContactItem from "./contai/StudentsFeelingsContactItem";

export default function StudentsFeelingsContact() {
  return (
    <Box
      p={50}
      bg={"var(--mantine-color-brand-1)"}
      style={{
        borderTopLeftRadius: "50px",
        borderTopRightRadius: "50px",
      }}
    >
      <Container size={"xl"}>
        <StudentsFeelingsContactItem />
      </Container>
    </Box>
  );
}
