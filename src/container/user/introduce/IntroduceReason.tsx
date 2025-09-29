import { Box, Container } from "@mantine/core";
import IntroduceReasonItem from "./contai/IntroduceReasonItem";

export default function IntroduceReason() {
  return (
    <Box p={50}>
      <Container size={"xl"}>
        <IntroduceReasonItem />
      </Container>
    </Box>
  );
}
