import { Box, Container } from "@mantine/core";
import TeachersIntroduceItem from "./contai/TeachersIntroduceItem";

export default function TeachersIntroduce() {
  return (
    <Box pt={20} pb={50}>
      <Container size={"xl"}>
        <TeachersIntroduceItem />
      </Container>
    </Box>
  );
}
