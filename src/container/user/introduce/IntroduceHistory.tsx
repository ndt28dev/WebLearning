import { Box, Container } from "@mantine/core";
import IntroduceHistoryItem from "./contai/IntroduceHistoryItem";

export default function IntroduceHistory() {
  return (
    <Box p={50}>
      <Container size={"md"}>
        <IntroduceHistoryItem />
      </Container>
    </Box>
  );
}
