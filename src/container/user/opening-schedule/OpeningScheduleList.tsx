import { Box, Container } from "@mantine/core";
import OpeningScheduleItem from "./contai/OpeningScheduleItem";
import OpeningScheduleContai from "./contai/OpeningScheduleContai";

export default function OpeningScheduleList() {
  return (
    <Box p={50} bg={"var(--mantine-color-brand-0)"}>
      <Container size={"xl"}>
        <OpeningScheduleContai />
      </Container>
    </Box>
  );
}
