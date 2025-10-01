import { Box, Container } from "@mantine/core";
import RecruitmentWelfareItem from "./contai/RecruitmentWelfareItem";

export default function RecruitmentWelfare() {
  return (
    <Box pt={20} pb={50}>
      <Container size={"xl"}>
        <RecruitmentWelfareItem />
      </Container>
    </Box>
  );
}
