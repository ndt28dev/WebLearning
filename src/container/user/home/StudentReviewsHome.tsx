import { Box, Container } from "@mantine/core";
import StudentReviews from "./contai/StudentReviews";

export default function StudentReviewsHome() {
  return (
    <Box
      style={{
        background:
          "linear-gradient(to bottom, rgba(255,255,255,0) 0%, var(--mantine-color-brand-2) 100%)",
      }}
    >
      <Container size={"lg"}>
        <StudentReviews />
      </Container>
    </Box>
  );
}
