"use client";
import MyGroupText from "@/components/mygrouptext/MyGroupText";
import { recruitmentData } from "@/modules/data/DataRecruitment";
import { IRecruitment } from "@/modules/interface/IRecruitment";
import { formatDate } from "@/utils/format";
import { Card, Flex, Grid, Image, Stack, Text } from "@mantine/core";
import { IconClock, IconUser } from "@tabler/icons-react";
import "@/styles/client/recruitment/RecruitmentItem.scss";

export default function RecruitmentItem() {
  const data: IRecruitment[] = recruitmentData.recruitmentList || [];
  return (
    <Stack gap={10}>
      <Text fz={25} fw={600} ta={"left"} c={"#333"}>
        Danh sách tuyển dụng
      </Text>
      <Grid>
        {data.map((item, index) => (
          <Grid.Col span={{ base: 12, md: 4 }} key={index}>
            <Card
              className="recruitmentItem"
              p={0}
              radius={"md"}
              bg={"white"}
              style={{ border: "1px solid var(--mantine-color-brand-2)" }}
            >
              <Image
                className="recruitmentItem-image"
                src={item.image}
                alt="image"
                w={"100%"}
                h={240}
                fit={"cover"}
              />
              <Card p={"xs"} radius={0}>
                <Text size="lg" fw={600} className="recruitmentItem-title">
                  {item.title}
                </Text>
                <Flex align={"center"} justify={"space-between"} gap={5} mt={2}>
                  <MyGroupText
                    icon={<IconUser size={20} style={{ marginBottom: -3 }} />}
                    text1="Số lượng"
                    size="md"
                    text2={item.slot?.toLocaleString()}
                  />
                  <MyGroupText
                    color="var(--mantine-color-brand-5)"
                    icon={
                      <IconClock
                        size={20}
                        color="var(--mantine-color-brand-5)"
                        style={{ marginBottom: -3 }}
                      />
                    }
                    text1="Hạn"
                    size="md"
                    text2={item.endDay && formatDate(item.endDay)}
                  />
                </Flex>
              </Card>
            </Card>
          </Grid.Col>
        ))}
      </Grid>
    </Stack>
  );
}
