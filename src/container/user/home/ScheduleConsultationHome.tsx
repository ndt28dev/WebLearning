import { Box, Container } from "@mantine/core";
import ScheduleConsultation from "./contai/ScheduleConsultation";

type Props = {
  status?: boolean;
};

export default function ScheduleConsultationHome({ status }: Props) {
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
        <ScheduleConsultation status={status} />
      </Container>
    </Box>
  );
}
