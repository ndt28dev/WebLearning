"use client";
import { Grid, Stack, Text, Title } from "@mantine/core";

export default function PartnerParameterItem() {
  return (
    <Grid gutter={50} align="center">
      <Grid.Col span={{ base: 12, md: 6 }}>
        <Stack gap={10}>
          <Title w={400} fz={45} c={"var(--mantine-color-brand-5)"}>
            Đối tác đồng hành cùng T-Learning
          </Title>
          <Text size="xl">
            Liên kết trường học, doanh nghiệp và tổ chức công nghệ để kiến tạo
            hệ sinh thái học tập – thực tập – học bổng toàn diện, nơi học viên
            được trang bị kiến thức cập nhật, va chạm dự án thực tế và nhận hỗ
            trợ tài chính – chứng chỉ thiết thực cho con đường sự nghiệp
          </Text>
        </Stack>
      </Grid.Col>
      <Grid.Col span={{ base: 12, md: 6 }}>
        <Grid pl={60} pr={60}>
          <Grid.Col span={{ base: 12, md: 6 }}>
            <Text fz={45} fw={700} c={"var(--mantine-color-brand-5)"}>
              60
            </Text>
            <Text size="lg">Đối tác chiến lược</Text>
          </Grid.Col>
          <Grid.Col span={{ base: 12, md: 6 }}>
            <Text fz={45} fw={700} c={"var(--mantine-color-brand-5)"}>
              12,000+
            </Text>
            <Text size="lg">Học viên thụ hưởng</Text>
          </Grid.Col>
          <Grid.Col span={{ base: 12, md: 6 }}>
            <Text fz={45} fw={700} c={"var(--mantine-color-brand-5)"}>
              300+
            </Text>
            <Text size="lg">Suất học bổng/năm</Text>
          </Grid.Col>
          <Grid.Col span={{ base: 12, md: 6 }}>
            <Text fz={45} fw={700} c={"var(--mantine-color-brand-5)"}>
              180+
            </Text>
            <Text size="lg">Giảng viên/Gia sư</Text>
          </Grid.Col>
          <Grid.Col span={{ base: 12, md: 6 }}>
            <Text fz={45} fw={700} c={"var(--mantine-color-brand-5)"}>
              100+
            </Text>
            <Text size="lg">Khoá học/năm</Text>
          </Grid.Col>
          <Grid.Col span={{ base: 12, md: 6 }}>
            <Text fz={45} fw={700} c={"var(--mantine-color-brand-5)"}>
              30
            </Text>
            <Text size="lg">Cam kết đầu ra</Text>
          </Grid.Col>
        </Grid>
      </Grid.Col>
    </Grid>
  );
}
