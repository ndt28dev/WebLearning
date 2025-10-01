"use client";
import { policyData } from "@/modules/data/DataPolicy";
import {
  IPolicyContents,
  IPolicyIntroduce,
} from "@/modules/interface/IPolicyData";
import { Flex, Grid, Image, Paper, Stack, Text } from "@mantine/core";
import { IconBulb, IconCertificate, IconClockCheck } from "@tabler/icons-react";

const icons = [IconCertificate, IconClockCheck, IconBulb];

export default function PolicyIntroduceItem() {
  const data: IPolicyIntroduce = policyData.policyIntroduce || {};

  return (
    <Stack gap={20}>
      {data.image && (
        <Image src={data.image} radius={"md"} alt="Policy header" w="100%" />
      )}
      <Grid>
        {data.description?.map((item, index) => {
          const IconComp = icons[index];
          return (
            <Grid.Col key={index} span={{ base: 12, md: 4 }}>
              <Flex
                h="100%"
                p={10}
                align="center"
                gap={10}
                style={{
                  borderRadius: 8,
                  border: "1px solid var(--mantine-color-brand-2)",
                }}
              >
                <Paper
                  radius={99999}
                  px={6}
                  py={4}
                  bg="var(--mantine-color-brand-1)"
                >
                  <IconComp
                    size={50}
                    stroke={1.2}
                    color="var(--mantine-color-brand-5)"
                  />
                </Paper>

                <Stack gap={0} style={{ flex: 1 }}>
                  <Text size="lg" fw={600} c="black">
                    {item}
                  </Text>
                </Stack>
              </Flex>
            </Grid.Col>
          );
        })}
      </Grid>
    </Stack>
  );
}
