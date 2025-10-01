import { Box, Container } from "@mantine/core";
import IntroduceValueItem from "./contai/IntroduceValueItem";
import IntroduceInfoItem from "./contai/IntroduceInfoItem";

export default function IntroduceInfo() {
  return (
    <Box pt={20} pb={50}>
      <Container size={"xl"}>
        <IntroduceInfoItem />
      </Container>
    </Box>
  );
}
