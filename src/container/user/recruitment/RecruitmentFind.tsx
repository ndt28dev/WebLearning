import { Box, Container } from "@mantine/core";
import RecruitmentFindItem from "./contai/RecruitmentFindItem";

type Props = { onJumpTop?: () => void };

export default function RecruitmentFind({ onJumpTop }: Props) {
  return (
    <>
      <Box p={50} bg={"var(--mantine-color-brand-0)"}>
        <Container size={"xl"}>
          <RecruitmentFindItem onJumpTop={onJumpTop} />
        </Container>
      </Box>
    </>
  );
}
