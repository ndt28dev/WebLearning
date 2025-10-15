"use client";
import MyTitleBasic from "@/components/client/mytitle/MyTitleBasic";
import { Button, Flex, Grid, Stack, Text } from "@mantine/core";

export default function ContactSupportItem() {
  return (
    <Stack gap={20}>
      <MyTitleBasic textTitle="T-LEARNING SẴN SÀNG HỖ TRỢ BẠN" />

      <Grid>
        <Grid.Col span={{ base: 12, md: 3 }}>
          <Flex
            direction="column"
            gap={5}
            p="sm"
            h="100%"
            style={{
              border: "1px solid var(--mantine-color-brand-2)",
              borderRadius: 8,
            }}
          >
            <Text size="xl" fw={600} c="var(--mantine-color-brand-5)">
              TƯ VẤN KHÓA HỌC
            </Text>
            <Text size="md" mb={5}>
              Cần được tư vấn khóa học hoặc lộ trình học cá nhân hóa? Đội ngũ cố
              vấn sẽ giúp bạn chọn chương trình và ưu đãi phù hợp nhất.
            </Text>
            <Button
              mt={"auto"}
              component="a"
              href="https://zalo.me/0764513977"
              target="_blank"
              rel="noopener noreferrer"
              variant="outline"
              color="brand.5"
              size="md"
              radius="xl"
            >
              <Text size="md">Liên hệ tư vấn</Text>
            </Button>
          </Flex>
        </Grid.Col>

        <Grid.Col span={{ base: 12, md: 3 }}>
          <Flex
            direction="column"
            gap={5}
            p="sm"
            h="100%"
            style={{
              border: "1px solid var(--mantine-color-brand-2)",
              borderRadius: 8,
            }}
          >
            <Text size="xl" fw={600} c="var(--mantine-color-brand-5)">
              HỖ TRỢ HỌC VIÊN
            </Text>
            <Text size="md" mb={5}>
              Gặp sự cố trong quá trình học hoặc cần hỗ trợ kỹ thuật? Bộ phận
              chăm sóc học viên luôn sẵn sàng giúp bạn.
            </Text>
            <Button
              mt={"auto"}
              component="a"
              href="https://zalo.me/0764513977"
              target="_blank"
              rel="noopener noreferrer"
              variant="filled"
              color="brand.5"
              size="md"
              radius="xl"
            >
              <Text size="md">Liên hệ hỗ trợ</Text>
            </Button>
          </Flex>
        </Grid.Col>

        <Grid.Col span={{ base: 12, md: 3 }}>
          <Flex
            direction="column"
            gap={5}
            p="sm"
            h="100%"
            style={{
              border: "1px solid var(--mantine-color-brand-2)",
              borderRadius: 8,
            }}
          >
            <Text size="xl" fw={600} c="var(--mantine-color-brand-5)">
              HỢP TÁC & TRUYỀN THÔNG
            </Text>
            <Text size="md" mb={5}>
              Muốn hợp tác đào tạo hoặc truyền thông cùng T-Learning? Đội ngũ
              đối tác & marketing sẽ phản hồi nhanh chóng.
            </Text>
            <Button
              mt={"auto"}
              component="a"
              href="https://zalo.me/0764513977"
              target="_blank"
              rel="noopener noreferrer"
              variant="outline"
              color="brand.5"
              size="md"
              radius="xl"
            >
              <Text size="md">Liên hệ hợp tác</Text>
            </Button>
          </Flex>
        </Grid.Col>

        <Grid.Col span={{ base: 12, md: 3 }}>
          <Flex
            direction="column"
            gap={5}
            p="sm"
            h="100%"
            style={{
              border: "1px solid var(--mantine-color-brand-2)",
              borderRadius: 8,
            }}
          >
            <Text size="xl" fw={600} c="var(--mantine-color-brand-5)">
              TUYỂN DỤNG GIẢNG VIÊN
            </Text>
            <Text size="md" mb={5}>
              Yêu thích giảng dạy và muốn đồng hành cùng T-Learning? Hãy gia
              nhập đội ngũ giảng viên và chuyên viên học thuật của chúng tôi.
            </Text>
            <Button
              mt={"auto"}
              component="a"
              href="https://zalo.me/0764513977"
              target="_blank"
              rel="noopener noreferrer"
              variant="filled"
              color="brand.5"
              size="md"
              radius="xl"
            >
              <Text size="md">Ứng tuyển ngay</Text>
            </Button>
          </Flex>
        </Grid.Col>
      </Grid>
    </Stack>
  );
}
