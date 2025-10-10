import { Box, Container } from "@mantine/core";
import RecruitmentEnvironmentItem from "./contai/RecruitmentEnvironmentItem";

export default function RecruitmentEnvironment() {
  return (
    <Box p={50} bg={"var(--mantine-color-brand-0)"}>
      <Container size={"xl"}>
        <RecruitmentEnvironmentItem />
      </Container>
    </Box>
  );
}
