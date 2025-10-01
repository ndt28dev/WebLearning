"use client";
import { recruitmentData } from "@/modules/data/DataRecruitment";
import { IRecruitmentFind } from "@/modules/interface/IRecruitmentData";
import { Card, Flex, Grid, Paper, Stack, Text } from "@mantine/core";
import {
  IconBolt,
  IconCompass,
  IconCurrencyDollar,
  IconMapPin,
  IconSparkles,
} from "@tabler/icons-react";
import { useState } from "react";

const icon = [IconSparkles, IconMapPin, IconCurrencyDollar, IconBolt];

type Props = { onJumpTop?: () => void };

export default function RecruitmentFindItem({ onJumpTop }: Props) {
  const data: IRecruitmentFind[] = recruitmentData.recruitmentFind || [];
  const [selected, setSelected] = useState(0);

  const handleChange = (p: number) => {
    setSelected(p);
    onJumpTop?.();
  };

  return (
    <Grid>
      {data.map((item, index) => {
        const IconComp = icon[index];
        return (
          <Grid.Col span={{ base: 12, md: 3 }} key={index}>
            <Card
              p={"md"}
              radius={"md"}
              h={"100%"}
              onClick={() => handleChange(index)}
              bg={selected === index ? "var(--mantine-color-brand-5)" : "white"}
              c={selected === index ? "white" : "black"}
              style={{
                borderRadius: 8,
                border: `1px solid ${
                  selected === index ? "white" : "var(--mantine-color-brand-2)"
                }`,
                cursor: "pointer",
              }}
            >
              <Flex align="center" gap={5}>
                <IconComp
                  size={40}
                  stroke={1.2}
                  color={
                    selected === index
                      ? "white"
                      : "var(--mantine-color-brand-5)"
                  }
                />
                <Text size="lg" fw={600} flex={1}>
                  {item.title}
                </Text>
              </Flex>
              <Text size="md">{item.description}</Text>
            </Card>
          </Grid.Col>
        );
      })}
    </Grid>
  );
}
