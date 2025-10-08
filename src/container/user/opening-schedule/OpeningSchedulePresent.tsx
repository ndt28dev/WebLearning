import { Box, Container } from "@mantine/core";
import OpeningSchedulePresentItem from "./contai/OpeningSchedulePresentItem";

export default function OpeningSchedulePresent() {
  return (
    <Box pt={20} pb={50}>
      <Container size={"xl"}>
        <OpeningSchedulePresentItem />
      </Container>
    </Box>
  );
}
