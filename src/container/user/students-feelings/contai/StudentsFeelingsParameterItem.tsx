"use client";
import { benefitsData } from "@/modules/data/DataBenefits";
import { feelingsData } from "@/modules/data/DataFeelings";
import { IBenefitsIntroduce } from "@/modules/interface/IBenefitsData";
import { IFeelingsParameter } from "@/modules/interface/IFeelingsData";
import { Flex, Grid, Image, Paper, Stack, Text } from "@mantine/core";
import { IconBulb, IconCertificate, IconClockCheck } from "@tabler/icons-react";

const icons = [IconCertificate, IconClockCheck, IconBulb];
export default function StudentsFeelingsParameterItem() {
  const data: IFeelingsParameter[] = feelingsData.feelingsParameter || [];

  return (
    <Stack gap={20}>
      <Grid>
        {data.map((item, index) => {
          const IconComp = icons[index];
          return (
            <Grid.Col key={index} span={{ base: 12, md: 4 }}>
              <Flex
                h="100%"
                p={10}
                align="center"
                gap={10}
                bg={"white"}
                style={{
                  borderRadius: 8,
                }}
              >
                <Paper
                  radius={99999}
                  h={60}
                  w={60}
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                  bg="var(--mantine-color-brand-1)"
                >
                  <IconComp
                    size={32}
                    stroke={1.5}
                    color="var(--mantine-color-brand-5)"
                  />
                </Paper>

                <Stack gap={0} style={{ flex: 1 }}>
                  <Text fz={25} fw={700} c="var(--mantine-color-brand-5)">
                    {item.title}
                  </Text>
                  <Text size="md">{item.description}</Text>
                </Stack>
              </Flex>
            </Grid.Col>
          );
        })}
      </Grid>
    </Stack>
  );
}
