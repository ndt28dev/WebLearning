import { Box, Container } from "@mantine/core";
import CourseRelated1v1 from "./contai/CourseRelated1v1";

export default function CourseRelated1v1Page() {
  return (
    <Box
      style={{
        backgroundImage: "url('/images/banner/bgr10.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <Container size={"xl"}>
        <CourseRelated1v1 />
      </Container>
    </Box>
  );
}
