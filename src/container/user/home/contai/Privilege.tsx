"use client";
import MyTitle from "@/components/client/mytitle/MyTitle";
import MyButton from "@/components/mybutton/MyButton";
import { homeMockData } from "@/modules/data/DataHome";
import { IPrivilegeHome } from "@/modules/interface/IHome";
import { Card, Flex, Grid, Stack, Text } from "@mantine/core";
import { IconChevronRight } from "@tabler/icons-react";
import RenderHighlightedTitle from "./RenderHighlightedTitle";

export default function Privilege() {
  const data: IPrivilegeHome = homeMockData.privilegeData;
  return (
    <Stack pt={50} pb={50} gap={5}>
      <MyTitle topic={data.topic} />
      <Grid>
        {data.privileges.map((item, index) => (
          <Grid.Col span={{ base: 12, md: 6 }} key={index}>
            <Card
              h={"100%"}
              style={{
                background:
                  "linear-gradient(200deg, var(--mantine-color-brand-2) 0%, var(--mantine-color-brand-0) 100%)",
              }}
            >
              <Text size="xl" fw={600} c={"white"}>
                <RenderHighlightedTitle
                  text={item.title}
                  highlights={item.highlights || []}
                />
              </Text>
              <Text size="md">{item.description}</Text>
            </Card>
          </Grid.Col>
        ))}
      </Grid>
    </Stack>
  );
}
