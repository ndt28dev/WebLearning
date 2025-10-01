"use client";
import { recruitmentData } from "@/modules/data/DataRecruitment";
import { IRecruitmentWelfare } from "@/modules/interface/IRecruitmentData";
import { Box, Card, Flex, Grid, Paper, Stack, Text } from "@mantine/core";
import {
  IconBus,
  IconCoffee,
  IconCompass,
  IconCurrencyDollar,
  IconScale,
  IconStairsUp,
  IconUsersGroup,
} from "@tabler/icons-react";

const icon = [
  IconCurrencyDollar,
  IconScale,
  IconUsersGroup,
  IconCoffee,
  IconBus,
  IconStairsUp,
];

export default function RecruitmentWelfareItem() {
  const data: IRecruitmentWelfare = recruitmentData.recruitmentWelfare || {};
  return (
    <Card
      style={{
        padding: "50px",
        border: "1px solid var(--mantine-color-brand-2)",
      }}
    >
      <Text
        fz={30}
        ta={"center"}
        fw={700}
        c={"var(--mantine-color-brand-5)"}
        mb={20}
      >
        Phúc lợi T-Learning
      </Text>
      <Grid>
        {data.title &&
          data.title.map((item, index) => {
            const IconComp = icon[index];
            return (
              <Grid.Col span={{ base: 12, md: 4 }} key={index}>
                <Stack
                  p={20}
                  align={"center"}
                  gap={20}
                  style={{
                    borderRadius: "8px",
                  }}
                >
                  <Paper
                    p={0}
                    style={{
                      width: 88,
                      height: 88,
                      background: "var(--mantine-color-brand-1)",
                      borderRadius: 12,
                      transform: "rotate(45deg)",
                      display: "grid",
                      placeItems: "center",
                    }}
                  >
                    <div style={{ transform: "rotate(-45deg)" }}>
                      <IconComp
                        size={40}
                        stroke={1.8}
                        color="var(--mantine-color-brand-5)"
                      />
                    </div>
                  </Paper>
                  <Text size="lg" fw={600} c="black" flex={1}>
                    {item}
                  </Text>
                </Stack>
              </Grid.Col>
            );
          })}
      </Grid>
    </Card>
  );
}
