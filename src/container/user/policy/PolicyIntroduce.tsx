import { Box, Container } from "@mantine/core";
import PolicyIntroduceItem from "./contai/PolicyIntroduceItem";

export default function PolicyIntroduce() {
  return (
    <Box pt={20} pb={50}>
      <Container size={"xl"}>
        <PolicyIntroduceItem />
      </Container>
    </Box>
  );
}
