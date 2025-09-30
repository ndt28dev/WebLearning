"use client";
import MyTitleBasic from "@/components/client/mytitle/MyTitleBasic";
import { teachersData } from "@/modules/data/DataTeachers";
import { ITeacherIntroduce } from "@/modules/interface/ITeacherData";
import {
  Box,
  Card,
  Flex,
  Grid,
  Paper,
  Stack,
  Text,
  ThemeIcon,
} from "@mantine/core";
import {
  IconAward,
  IconCertificate,
  IconChalkboard,
  IconRoute,
  IconSchool,
  IconTimeline,
} from "@tabler/icons-react";

const icon = [IconAward, IconCertificate, IconSchool];

export default function TeachersIntroduceItem() {
  const data: ITeacherIntroduce = teachersData.teachersIntroduce || {};
  return (
    <Grid>
      {data.introduces &&
        data.introduces.map((item, index) => {
          const IconComp = icon[index];
          return (
            <Grid.Col key={index} span={4}>
              <Flex
                h={"100%"}
                p={10}
                align={"center"}
                gap={10}
                style={{
                  borderRadius: "8px",
                  boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 12px",
                }}
              >
                <Paper
                  radius={99999}
                  style={{ padding: "4px 6px" }}
                  bg={"var(--mantine-color-brand-5)"}
                >
                  <IconComp size={50} stroke={1.2} color="white" />
                </Paper>
                <Stack gap={0} flex={1}>
                  <Text fz={25} fw={600} c={"var(--mantine-color-brand-5)"}>
                    {item.title}
                  </Text>
                  <Text size="lg">{item.description}</Text>
                </Stack>
              </Flex>
            </Grid.Col>
          );
        })}
    </Grid>
  );
}
