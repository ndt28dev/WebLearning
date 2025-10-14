import { Box, Container } from "@mantine/core";
import StudentsAchievementsHeaderItem from "./contai/StudentsAchievementsHeaderItem";

export default function StudentsAchievementsHeader() {
  return (
    <Box p={50} bg="#F3F3F5">
      <Container size={"xl"}>
        <StudentsAchievementsHeaderItem />
      </Container>
    </Box>
  );
}
