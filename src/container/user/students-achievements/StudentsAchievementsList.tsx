import { Box, Container } from "@mantine/core";
import StudentsAchievements from "./contai/StudentsAchievements";
import StudentsAchievementsItem from "./contai/StudentsAchievementsItem";

export default function StudentsAchievementsList() {
  return (
    <Box p={50} bg={"var(--mantine-color-brand-0)"}>
      <Container size={"xl"}>
        <StudentsAchievementsItem />
      </Container>
    </Box>
  );
}
