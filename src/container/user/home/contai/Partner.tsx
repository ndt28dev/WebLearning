"use client";
import MyTitle from "@/components/client/mytitle/MyTitle";
import { homeMockData } from "@/modules/data/DataHome";
import { IPartnerHome } from "@/modules/interface/IHome";
import { Box, Card, Grid, Image, Stack, Text } from "@mantine/core";

export default function Partner() {
  const data: IPartnerHome = homeMockData.partnerData;
  return (
    <Stack pt={50} pb={50} gap={5}>
      <MyTitle topic={data.topic} />

      <Grid>
        {data.partners.map((item, index) => (
          <Grid.Col span={3} key={index}>
            <Card>
              <Box h={80}>
                <Image
                  src={item.image}
                  alt={item.name}
                  fit="contain"
                  h="100%"
                  w={"100%"}
                />
              </Box>

              <Text
                size="sm"
                mt={10}
                fw={500}
                c={"var(--mantine-color-brand-5)"}
                ta={"center"}
              >
                {item.name}
              </Text>
            </Card>
          </Grid.Col>
        ))}
      </Grid>
    </Stack>
  );
}
