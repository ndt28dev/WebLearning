import { Box, Container } from "@mantine/core";
import ScheduleConsultation from "./contai/ScheduleConsultation";

export default function ScheduleConsultationHome() {
  return (
    <Box
      style={{
        backgroundImage: "url('/images/banner/bgr6.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <Container size={"xl"}>
        <ScheduleConsultation />
      </Container>
    </Box>
  );
}
