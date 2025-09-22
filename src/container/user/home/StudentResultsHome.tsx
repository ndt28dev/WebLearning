import { Box, Container } from "@mantine/core";
import StudentResults from "./contai/StudentResults";

export default function StudentResultsHome() {
  return (
    <Box
      style={{
        backgroundImage: "url('/images/banner/bgr9.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <Container size={"lg"}>
        <StudentResults />
      </Container>
    </Box>
  );
}
