import { Box, Container, Stack } from "@mantine/core";
import IntroduceValueItem from "./contai/IntroduceValueItem";

export default function IntroduceValue() {
  return (
    <Box p={50} bg={"var(--mantine-color-brand-0)"}>
      <Container size={"xl"}>
        <IntroduceValueItem />
      </Container>
    </Box>
  );
}
