import { Box, Container } from "@mantine/core";
import RecruitmentItem from "./contai/RecruitmentItem";

type Props = {
  children?: React.ReactNode;
};

export default function RecruitmentList({ children }: Props) {
  return (
    <Box pt={20} pb={50}>
      <Container size={"xl"}>
        {children}
        <RecruitmentItem />
      </Container>
    </Box>
  );
}
