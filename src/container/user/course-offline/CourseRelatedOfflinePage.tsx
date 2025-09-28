import { Box, Container } from "@mantine/core";
import CourseRelatedOffline from "./contai/CourseRelatedOffline";

export default function CourseRelatedOfflinePage() {
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
        <CourseRelatedOffline />
      </Container>
    </Box>
  );
}
