import { Box, Container } from "@mantine/core";
import TrainingProgramCon from "./contai/TrainingProgramCon";

export default function TrainingProgramHome() {
  return (
    <Box
      style={{
        backgroundColor: "var(--mantine-color-brand-5)",
        backgroundImage: "url('/images/banner/bgr2.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <Container size={"lg"}>
        <TrainingProgramCon />
      </Container>
    </Box>
  );
}
