import {
  AspectRatio,
  Box,
  Button,
  Card,
  Container,
  Group,
  Image,
  Overlay,
  Paper,
  Text,
  Title,
} from "@mantine/core";

export default function BannerHome() {
  return (
    <AspectRatio ratio={16 / 9} pos="relative">
      <Image radius="md" fit="cover" h={500} src="images/banner/banner1.png" />

      {/* <Overlay
        h={500}
        gradient="linear-gradient(145deg, rgba(0, 0, 0, 0.95) 0%, rgba(0, 0, 0, 0) 100%)"
        opacity={0.85}
        zIndex={1}
      /> */}

      <Box
        pos="absolute"
        top={0}
        left={0}
        w="100%"
        h="100%"
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          zIndex: 2,
        }}
      >
        <Container size={"lg"} w={"100%"} h={"100%"}>
          <Title order={1}>Chào mừng đến với Website của tôi</Title>
          <Text fz="lg" mb="md" ta="center" maw={600}>
            Đây là đoạn mô tả ngắn nằm trên ảnh, đè lên overlay.
          </Text>
          <Button size="lg" color="blue">
            Khám phá ngay
          </Button>
        </Container>
      </Box>
    </AspectRatio>
  );
}
