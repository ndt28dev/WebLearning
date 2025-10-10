import { Box, Container } from "@mantine/core";
import RecruitmentRegimeItem from "./contai/RecruitmentRegimeItem";

export default function RecruitmentRegime() {
  return (
    <Box p={50}>
      <Container size={"xl"}>
        <RecruitmentRegimeItem />
      </Container>
    </Box>
  );
}
