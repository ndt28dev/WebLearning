import { Box, Container } from "@mantine/core";
import CourseRelatedOnline from "./contai/CourseRelatedOnline";

export default function CourseRelatedOnlinePage() {
  return (
    <Box
      style={{
        backgroundImage: "url('/images/banner/bgr11.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <Container size={"xl"}>
        <CourseRelatedOnline />
      </Container>
    </Box>
  );
}
