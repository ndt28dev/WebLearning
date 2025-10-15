import { Box, Container } from "@mantine/core";
import NewsAndEventsContentItem from "./contai/NewsAndEventsContentItem";

export default function NewsAndEventsContent() {
  return (
    <Box pt={20} pb={50}>
      <Container size={"xl"}>
        <NewsAndEventsContentItem />
      </Container>
    </Box>
  );
}
