import { Box, Container } from "@mantine/core";
import StudentsAchievementsParameterItem from "./contai/StudentsAchievementsParameterItem";

export default function StudentsAchievementsParameter() {
  return (
    <Box pt={20} pb={50}>
      <Container size={"xl"}>
        <StudentsAchievementsParameterItem />
      </Container>
    </Box>
  );
}
