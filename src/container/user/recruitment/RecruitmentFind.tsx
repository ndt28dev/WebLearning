"use client";
import { Box, Container } from "@mantine/core";
import RecruitmentFindItem from "./contai/RecruitmentFindItem";
import { useScrollIntoView } from "@mantine/hooks";

export default function RecruitmentFind() {
  const { scrollIntoView, targetRef } = useScrollIntoView<HTMLDivElement>({
    offset: 80,
    duration: 200,
  });

  return (
    <>
      <Box p={50} bg={"var(--mantine-color-brand-0)"}>
        <Container size={"xl"}>
          <RecruitmentFindItem onJumpTop={() => scrollIntoView()} />
        </Container>
      </Box>
      <div ref={targetRef} />
    </>
  );
}
