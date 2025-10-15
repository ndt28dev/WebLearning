"use client";
import MyTitleBasic from "@/components/client/mytitle/MyTitleBasic";
import {
  Box,
  Button,
  Card,
  Container,
  Grid,
  Group,
  Stack,
  Text,
} from "@mantine/core";
import { IconMapPin } from "@tabler/icons-react";

export default function ContactTimeItem() {
  return (
    <Stack gap={50}>
      <MyTitleBasic textTitle="THỜI GIAN TƯ VẤN & ĐẶT LỊCH HẸN" />
      <Grid>
        <Grid.Col span={{ base: 12, md: 6 }}>
          <Card
            p={0}
            radius={"md"}
            style={{ border: "2px solid #C12525" }}
            h={"100%"}
          >
            <Stack gap={0} p={10} bg={"#C12525"}>
              <Text fz={22} fw={700} c="white" ta={"center"}>
                TƯ VẤN ONLINE
              </Text>
              <Text size="md" c="white" ta={"center"}>
                Nhắn tin tư vấn tại Zalo T-Learning
              </Text>
            </Stack>
            <Stack gap={0} p={30} align="center">
              <Text fz={22} fw={700}>
                07:00 - 19:00
              </Text>
              <Text size="md" c="dimmed">
                (Thứ 2 - Chủ nhật)
              </Text>
              <Box>
                <Button
                  mt={20}
                  variant="filled"
                  color="#C12525"
                  size="md"
                  radius={"xl"}
                >
                  Nhận tư vấn
                </Button>
              </Box>
            </Stack>
          </Card>
        </Grid.Col>
        <Grid.Col span={{ base: 12, md: 6 }}>
          <Card
            p={0}
            radius={"md"}
            style={{ border: "2px solid #072362" }}
            h={"100%"}
          >
            <Stack gap={0} p={10} bg={"#072362"}>
              <Text fz={22} fw={700} c="white" ta={"center"}>
                TƯ VẤN OFFLINE
              </Text>
              <Text size="md" c="white" ta={"center"}>
                Tư vấn trực tiếp tại trung tâm
              </Text>
            </Stack>
            <Stack gap={0} p={30} align="center">
              <Group gap={0}>
                <Stack
                  gap={0}
                  style={{
                    paddingRight: "15px",
                    borderRight: "1px solid #ccc",
                  }}
                  ta={"center"}
                >
                  <Text fz={22} fw={700}>
                    07:00 - 19:00
                  </Text>
                  <Text size="md" c="dimmed">
                    (Thứ 2 - Thứ 6)
                  </Text>
                </Stack>
                <Stack
                  gap={0}
                  style={{
                    paddingLeft: "15px",
                    borderLeft: "1px solid #ccc",
                  }}
                  ta={"center"}
                >
                  <Text fz={22} fw={700}>
                    09:00 - 11:00
                  </Text>
                  <Text size="md" c="dimmed">
                    (Thứ 7)
                  </Text>
                </Stack>
              </Group>
              <Group gap={10} align="center" mt={20}>
                <IconMapPin size={20} color="#072362" />
                <Text size="md" fw={500} flex={1} ta={"center"}>
                  Toà nhà An Tâm Building, số 213/9 Nguyễn Gia Trí, Phường Thạnh
                  Mỹ Tây, TP.HCM
                </Text>
              </Group>
            </Stack>
          </Card>
        </Grid.Col>
      </Grid>
    </Stack>
  );
}
