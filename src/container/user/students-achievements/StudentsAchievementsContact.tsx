import { Box, Container } from "@mantine/core";
import StudentsAchievementsContactItem from "./contai/StudentsAchievementsContactItem";

export default function StudentsAchievementsContact() {
  return (
    <Box
      p={50}
      bg={"var(--mantine-color-brand-5)"}
      style={{
        borderTopLeftRadius: "50px",
        borderTopRightRadius: "50px",
      }}
    >
      <Container size={"xl"}>
        <StudentsAchievementsContactItem />
      </Container>
    </Box>
  );
}
