"use client";
import MyTitle from "@/components/client/mytitle/MyTitle";
import { homeMockData } from "@/modules/data/DataHome";
import { INewsAndEventsHome } from "@/modules/interface/IHome";
import { INewsAndEvents } from "@/modules/interface/INewsAndEvents";
import {
  Box,
  Card,
  Center,
  Flex,
  Grid,
  Group,
  Image,
  Overlay,
  Stack,
  Text,
} from "@mantine/core";
import "@/styles/client/home/NewsAndEvents.scss";
import MyButton from "@/components/mybutton/MyButton";

export default function NewsAndEvents() {
  const data: INewsAndEventsHome = homeMockData.newsAndEventsData;

  const rightCol = data.newsAndEvents.slice(1, data.newsAndEvents.length);

  const renderColumnLeft = (item: INewsAndEvents) => (
    <Box h={"100%"} style={{ position: "relative" }}>
      <Image src={item.imageCover} alt={item.title} radius="md" h={"100%"} />
      <Overlay opacity={0.3} color="black" zIndex={1} radius="md" />
      <Box
        style={{ position: "absolute", bottom: 0, left: 0, zIndex: 2 }}
        p={"md"}
        className="news-item"
      >
        <Text
          fw={600}
          c={"white"}
          size="lg"
          lineClamp={3}
          className="text-title"
        >
          {item.title}
        </Text>
        <Text size="md" fw={500} className="text-hover">
          Xem chi tiết
        </Text>
      </Box>
    </Box>
  );
  const renderColumnRight = (item: INewsAndEvents[]) => (
    <Stack gap={30}>
      {item.map((it) => (
        <Flex
          key={it.id}
          gap={10}
          bg={"white"}
          p={5}
          style={{
            border: "1px solid var(--mantine-color-brand-2)",
            borderRadius: "8px",
          }}
          align={"self-start"}
        >
          <Image src={it.imageCover} alt={it.title} radius="md" w={200} />
          <Stack gap={5} className="news-item">
            <Text fw={600} size="lg" lineClamp={3} className="text-title">
              {it.title}
            </Text>
            <Text
              size="md"
              fw={500}
              className="text-hover"
              display="inline-block"
              w="fit-content"
            >
              Xem chi tiết
            </Text>
          </Stack>
        </Flex>
      ))}
    </Stack>
  );
  return (
    <Stack pt={50} pb={50} gap={5} className="newsAndEvents">
      <MyTitle topic={data.topic} />
      <Grid>
        <Grid.Col span={{ base: 12, md: 6 }}>
          {renderColumnLeft(data.newsAndEvents[0])}
        </Grid.Col>
        <Grid.Col span={{ base: 12, md: 6 }}>
          {renderColumnRight(rightCol)}
        </Grid.Col>
      </Grid>
      <Center mt={30}>
        <MyButton
          label="Xem thêm"
          link="/courses"
          variant="filled"
          size="md"
          color="brand.5"
        />
      </Center>
    </Stack>
  );
}
