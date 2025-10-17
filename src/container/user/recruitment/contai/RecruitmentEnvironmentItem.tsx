"use client";
import { Box, Card, Flex, Grid, Stack, Text } from "@mantine/core";
import {
  IconBulb,
  IconHandClick,
  IconHome,
  IconUsers,
  IconUsersGroup,
} from "@tabler/icons-react";

export default function RecruitmentEnvironmentItem() {
  return (
    <Stack gap={50}>
      <Text
        fz={22}
        fw={600}
        style={{ borderRadius: 8, textTransform: "uppercase" }}
        p={"xs"}
        bg={"var(--mantine-color-brand-5)"}
        c={"white"}
        ta={"center"}
      >
        Môi trường làm việc
      </Text>
      <Grid>
        <Grid.Col span={{ base: 12, md: 4 }}>
          <Card
            bg={"white"}
            pt={15}
            pb={10}
            radius={"md"}
            h={"100%"}
            style={{
              border: "1px solid var(--mantine-color-brand-2)",
              position: "relative",
              overflow: "visible",
            }}
          >
            <Stack gap={5} ta="center" pt={25}>
              <Text size="md">Trẻ trung</Text>
              <Text size="md">Cởi mở</Text>
              <Text size="md">Chuyên nghiệp</Text>
            </Stack>
            <Flex
              justify="center"
              align="center"
              bg="var(--mantine-color-brand-5)"
              w={60}
              h={60}
              style={{
                position: "absolute",
                top: -30,
                left: "50%",
                transform: "translateX(-50%)",
                borderRadius: "50%",
                zIndex: 2,
              }}
            >
              <IconUsersGroup size={32} color="white" stroke={1.5} />
            </Flex>
          </Card>
        </Grid.Col>
        <Grid.Col span={{ base: 12, md: 4 }}>
          <Card
            bg={"white"}
            pt={15}
            pb={10}
            radius={"md"}
            h={"100%"}
            style={{
              border: "1px solid var(--mantine-color-brand-2)",
              position: "relative",
              overflow: "visible",
            }}
          >
            <Stack gap={5} ta="center" pt={25}>
              <Text size="md">Đề cao tính cá nhân</Text>
              <Text size="md">Khuyến khích chủ động sáng tạo</Text>
              <Text size="md">Học tập và phát triển</Text>
            </Stack>
            <Flex
              justify="center"
              align="center"
              bg="var(--mantine-color-brand-5)"
              w={60}
              h={60}
              style={{
                position: "absolute",
                top: -30,
                left: "50%",
                transform: "translateX(-50%)",
                borderRadius: "50%",
                zIndex: 2,
              }}
            >
              <IconBulb size={32} color="white" stroke={1.5} />
            </Flex>
          </Card>
        </Grid.Col>
        <Grid.Col span={{ base: 12, md: 4 }}>
          <Card
            bg={"white"}
            pt={15}
            pb={10}
            radius={"md"}
            style={{
              border: "1px solid var(--mantine-color-brand-2)",
              position: "relative",
              overflow: "visible",
            }}
            h={"100%"}
          >
            <Stack gap={5} ta="center" pt={25}>
              <Text size="md">Đặc biệt chú trọng số hóa, công nghệ</Text>
            </Stack>
            <Flex
              justify="center"
              align="center"
              bg="var(--mantine-color-brand-5)"
              w={60}
              h={60}
              style={{
                position: "absolute",
                top: -30,
                left: "50%",
                transform: "translateX(-50%)",
                borderRadius: "50%",
                zIndex: 2,
              }}
            >
              <IconHandClick size={32} color="white" stroke={1.5} />
            </Flex>
          </Card>
        </Grid.Col>
      </Grid>
    </Stack>
  );
}
