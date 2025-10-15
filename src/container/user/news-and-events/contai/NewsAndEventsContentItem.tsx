"use client";
import { Box, Card, Grid, Group, Image, Stack, Text } from "@mantine/core";
import { IconCalendarEvent, IconNews } from "@tabler/icons-react";
import { useState } from "react";
import NewsContentItem from "./NewsContentItem";
import EventsContentItem from "./EventsContentItem";
import "@/styles/client/newsandevents/NewsContentItem.scss";
import NewsAndEventsForm from "./NewsAndEventsForm";

export default function NewsAndEventsContentItem() {
  const [index, setIndex] = useState<number>(0);
  return (
    <Grid>
      <Grid.Col span={{ base: 12, md: 9 }}>
        {
          {
            0: <NewsContentItem />,
            1: <EventsContentItem />,
          }[index]
        }
      </Grid.Col>
      <Grid.Col span={{ base: 12, md: 3 }}>
        <Box
          bg={"var(--mantine-color-brand-1)"}
          p={5}
          style={{ borderRadius: 8 }}
        >
          <Card p={5} radius={"md"} bg={"white"}>
            <Stack gap={0} p={"md"}>
              <Text
                size={"xl"}
                mb={10}
                fw={700}
                c={"var(--mantine-color-brand-5)"}
              >
                Mục lục
              </Text>
              <Group
                gap={5}
                align="center"
                p={5}
                bg={index === 0 ? "var(--mantine-color-brand-5)" : "white"}
                style={{
                  color: index === 0 ? "white" : "#333",
                  borderRadius: 8,
                  cursor: "pointer",
                }}
                onClick={() => setIndex(0)}
              >
                <IconNews size={20} color={index === 0 ? "white" : "#333"} />
                <Text size={"lg"}>Tin tức</Text>
              </Group>
              <Group
                gap={5}
                align="center"
                p={5}
                bg={index === 1 ? "var(--mantine-color-brand-5)" : "white"}
                style={{
                  color: index === 1 ? "white" : "#333",
                  borderRadius: 8,
                  cursor: "pointer",
                }}
                onClick={() => setIndex(1)}
              >
                <IconCalendarEvent
                  size={20}
                  color={index === 1 ? "white" : "#333"}
                />
                <Text size={"lg"}>Sự kiện</Text>
              </Group>
            </Stack>
            <Box mb={16}>
              <Image
                src={"/images/newsandevents/imgNav.jpg"}
                radius={"md"}
                alt="news-and-events"
                h={"100%"}
              />
            </Box>
            <NewsAndEventsForm />
          </Card>
        </Box>
      </Grid.Col>
    </Grid>
  );
}
