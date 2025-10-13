import { Box, Container } from "@mantine/core";
import StudentsBenefitsItem from "./contai/StudentsBenefitsItem";

export default function StudentsBenefitsList() {
  return (
    <Box p={50} bg={"var(--mantine-color-brand-0)"}>
      <Container size={"xl"}>
        <StudentsBenefitsItem />
      </Container>
    </Box>
  );
}
