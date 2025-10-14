import { Box, Container } from "@mantine/core";
import OpeningScheduleContactItem from "./contai/OpeningScheduleContactItem";

export default function OpeningScheduleContact() {
  return (
    <Box
      p={50}
      bg={"var(--mantine-color-brand-5)"}
      style={{
        borderTopLeftRadius: "50px",
        borderTopRightRadius: "50px",
      }}
    >
      <Container size={"xl"}>
        <OpeningScheduleContactItem />
      </Container>
    </Box>
  );
}
