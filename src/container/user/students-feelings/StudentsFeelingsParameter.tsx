import { Box, Container } from "@mantine/core";
import StudentsFeelingsParameterItem from "./contai/StudentsFeelingsParameterItem";

export default function StudentsFeelingsParameter() {
  return (
    <Box
      p={50}
      style={{
        borderTopLeftRadius: "50px",
        borderTopRightRadius: "50px",
      }}
      bg={"var(--mantine-color-brand-1)"}
    >
      <Container size={"xl"}>
        <StudentsFeelingsParameterItem />
      </Container>
    </Box>
  );
}
