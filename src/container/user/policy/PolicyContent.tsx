import { Box, Container } from "@mantine/core";
import PolicyIntroduceItem from "./contai/PolicyIntroduceItem";
import PolicyContentItem from "./contai/PolicyContentItem";

export default function PolicyContent() {
  return (
    <Box pb={50}>
      <Container size={"xl"}>
        <PolicyContentItem />
      </Container>
    </Box>
  );
}
