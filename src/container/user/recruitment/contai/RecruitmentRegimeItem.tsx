import MyGroupText from "@/components/mygrouptext/MyGroupText";
import { Card, Flex, Grid, Stack, Text } from "@mantine/core";
import {
  IconBulb,
  IconCheck,
  IconHandClick,
  IconStar,
  IconUsersGroup,
} from "@tabler/icons-react";

export default function RecruitmentRegimeItem() {
  return (
    <Stack gap={50}>
      <Text
        fz={22}
        fw={600}
        p={"xs"}
        c={"#333"}
        ta={"left"}
        style={{ borderLeft: "5px solid var(--mantine-color-brand-5)" }}
      >
        Chế độ đãi ngộ tổng thể
      </Text>
      <Grid>
        <Grid.Col span={{ base: 12, md: 3 }}>
          <Card
            bg={"white"}
            pt={15}
            pb={10}
            radius={"lg"}
            h={"100%"}
            style={{
              border: "2px solid var(--mantine-color-brand-2)",
              position: "relative",
              overflow: "visible",
            }}
          >
            <Stack gap={5} ta="center" pt={25}>
              <Text size="xl" fw={600} c={"#333"}>
                Chế độ lương thưởng
              </Text>
              <Stack gap={5} ta="center" pt={5}>
                <MyGroupText
                  text1="Lương cứng và phụ cấp cạnh tranh"
                  icon={
                    <IconCheck size={20} color="var(--mantine-color-brand-5)" />
                  }
                />
                <MyGroupText
                  text1="Lương KPI và lương doanh thu"
                  icon={
                    <IconCheck size={20} color="var(--mantine-color-brand-5)" />
                  }
                />
                <MyGroupText
                  text1="Thưởng tháng lương 13, thưởng hiệu suất kinh doanh"
                  icon={
                    <IconCheck size={20} color="var(--mantine-color-brand-5)" />
                  }
                />
                <MyGroupText
                  text1="Điều chỉnh lương: theo kết quả đánh giá năm"
                  icon={
                    <IconCheck size={20} color="var(--mantine-color-brand-5)" />
                  }
                />
              </Stack>
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
        <Grid.Col span={{ base: 12, md: 3 }}>
          <Card
            bg={"white"}
            pt={15}
            pb={10}
            radius={"lg"}
            h={"100%"}
            style={{
              border: "2px solid var(--mantine-color-brand-2)",
              position: "relative",
              overflow: "visible",
            }}
          >
            <Stack gap={5} ta="center" pt={25}>
              <Text size="xl" fw={600} c={"#333"}>
                Chế độ phúc lợi
              </Text>
              <Stack gap={5} ta="center" pt={5}>
                <MyGroupText
                  text1="Nghỉ phép: 12-18 ngày tùy cấp"
                  icon={
                    <IconCheck size={20} color="var(--mantine-color-brand-5)" />
                  }
                />
                <MyGroupText
                  text1="Nghỉ lễ: theo luật quy định"
                  icon={
                    <IconCheck size={20} color="var(--mantine-color-brand-5)" />
                  }
                />
                <MyGroupText
                  text1="Nghỉ sinh nhật: nghỉ 1/2 ngày"
                  icon={
                    <IconCheck size={20} color="var(--mantine-color-brand-5)" />
                  }
                />
                <MyGroupText
                  text1="Quà nhân các dịp đặc biệt: cưới, sinh nhật, lễ Tết"
                  icon={
                    <IconCheck size={20} color="var(--mantine-color-brand-5)" />
                  }
                />
                <MyGroupText
                  text1="Làm việc linh hoạt: cấp Quản lý trở lên"
                  icon={
                    <IconCheck size={20} color="var(--mantine-color-brand-5)" />
                  }
                />
                <MyGroupText
                  text1="Thiết bị làm việc: hiện đại, đầy đủ"
                  icon={
                    <IconCheck size={20} color="var(--mantine-color-brand-5)" />
                  }
                />
                <MyGroupText
                  text1="Các hoạt động gắn kết như du lịch, dã ngoại, tiệc công ty theo chuẩn từ 4 - 5 sao"
                  icon={
                    <IconCheck size={20} color="var(--mantine-color-brand-5)" />
                  }
                />
              </Stack>
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
        <Grid.Col span={{ base: 12, md: 3 }}>
          <Card
            bg={"white"}
            pt={15}
            pb={10}
            radius={"lg"}
            h={"100%"}
            style={{
              border: "2px solid var(--mantine-color-brand-2)",
              position: "relative",
              overflow: "visible",
            }}
          >
            <Stack gap={5} ta="center" pt={25}>
              <Text size="xl" fw={600} c={"#333"}>
                Đào tạo phát triển
              </Text>
              <Stack gap={5} ta="center" pt={5}>
                <MyGroupText
                  text1="Cơ hội thăng tiến, lộ trình nghề nghiệp"
                  icon={
                    <IconCheck size={20} color="var(--mantine-color-brand-5)" />
                  }
                />
                <MyGroupText
                  text1="Văn hóa chia sẻ kiến thức"
                  icon={
                    <IconCheck size={20} color="var(--mantine-color-brand-5)" />
                  }
                />
                <MyGroupText
                  text1="Được tham gia vào các hoạt động đào tạo, phát triển sự nghiệp chuyên sâu"
                  icon={
                    <IconCheck size={20} color="var(--mantine-color-brand-5)" />
                  }
                />
                <MyGroupText
                  text1="Chính sách hỗ trợ học, thi chứng chỉ cho cá nhân và phòng ban"
                  icon={
                    <IconCheck size={20} color="var(--mantine-color-brand-5)" />
                  }
                />
                <MyGroupText
                  text1="Ưu đãi học phí các khóa học tại SAPP"
                  icon={
                    <IconCheck size={20} color="var(--mantine-color-brand-5)" />
                  }
                />
              </Stack>
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
        <Grid.Col span={{ base: 12, md: 3 }}>
          <Card
            bg={"white"}
            pt={15}
            pb={10}
            radius={"lg"}
            h={"100%"}
            style={{
              border: "2px solid var(--mantine-color-brand-2)",
              position: "relative",
              overflow: "visible",
            }}
          >
            <Stack gap={5} ta="center" pt={25}>
              <Text size="xl" fw={600} c={"#333"}>
                Ghi nhận và vinh danh
              </Text>
              <Stack gap={5} ta="center" pt={5}>
                <MyGroupText
                  text1="Có 2 kỳ đánh giá định kỳ hàng năm để nhìn lại hành trình phát triển của từng nhân viên"
                  icon={
                    <IconCheck size={20} color="var(--mantine-color-brand-5)" />
                  }
                />
                <MyGroupText
                  text1="Các cá nhân, tập thể có thành tích nổi bật sẽ được công"
                  icon={
                    <IconCheck size={20} color="var(--mantine-color-brand-5)" />
                  }
                />
                <MyGroupText
                  text1="nhận và vinh danh qua các hình thức như giấy khen, phần thưởng, thăng tiến,..."
                  icon={
                    <IconCheck size={20} color="var(--mantine-color-brand-5)" />
                  }
                />
              </Stack>
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
              <IconStar size={32} color="white" stroke={1.5} />
            </Flex>
          </Card>
        </Grid.Col>
      </Grid>
    </Stack>
  );
}
