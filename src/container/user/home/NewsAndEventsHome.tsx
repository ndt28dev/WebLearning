import { Box, Container } from "@mantine/core";
import NewsAndEvents from "./contai/NewsAndEvents";

export default function NewsAndEventsHome() {
  return (
    <Box
      style={{
        backgroundImage: "url('/images/banner/bgr11.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <Container size={"xl"}>
        <NewsAndEvents />
      </Container>
    </Box>
  );
}
