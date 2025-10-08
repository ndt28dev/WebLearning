import { Box, Container } from "@mantine/core";
import OpeningScheduleHeaderItem from "./contai/OpeningScheduleHeaderItem";

export default function OpeningScheduleHeader() {
  return (
    <Box p={50} bg={"var(--mantine-color-brand-0)"}>
      <Container size={"xl"}>
        <OpeningScheduleHeaderItem />
      </Container>
    </Box>
  );
}
