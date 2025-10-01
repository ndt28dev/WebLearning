import { Box, Container } from "@mantine/core";
import RecruitmentItem from "./contai/RecruitmentItem";

export default function RecruitmentList() {
  return (
    <Box pt={20} pb={50}>
      <Container size={"xl"}>
        <RecruitmentItem />
      </Container>
    </Box>
  );
}
