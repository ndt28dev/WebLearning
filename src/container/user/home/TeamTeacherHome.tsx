import { Box, Container } from "@mantine/core";
import TeamTeacher from "./contai/TeamTeacher";

export default function TeamTeacherHome() {
  return (
    <Box
      style={{
        // backgroundImage: "url('/images/banner/bgr6.png')",
        backgroundImage: "url('/images/banner/bgr10.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <Container size={"xl"}>
        <TeamTeacher />
      </Container>
    </Box>
  );
}
