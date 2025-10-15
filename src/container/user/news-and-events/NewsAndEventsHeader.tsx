import { Box, Container } from "@mantine/core";
import NewsAndEventsHeaderItem from "./contai/NewsAndEventsHeaderItem";

export default function NewsAndEventsHeader() {
  return (
    <Box pt={20} pb={50}>
      <Container size={"xl"}>
        <NewsAndEventsHeaderItem />
      </Container>
    </Box>
  );
}
