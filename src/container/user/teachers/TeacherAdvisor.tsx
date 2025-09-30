import { Box, Container } from "@mantine/core";
import TeacherAdvisorItem from "./contai/TeacherAdvisorItem";

export default function TeacherAdvisor() {
  return (
    <Box p={50}>
      <Container size={"xl"}>
        <TeacherAdvisorItem />
      </Container>
    </Box>
  );
}
