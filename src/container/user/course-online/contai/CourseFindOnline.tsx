import {
  ActionIcon,
  Box,
  Button,
  Fieldset,
  Flex,
  Group,
  Input,
  Menu,
  Modal,
  Pill,
  Stack,
  Text,
  Tooltip,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import {
  IconAdjustments,
  IconArrowDown,
  IconArrowsLeftRight,
  IconArrowUp,
  IconCalendar,
  IconCurrencyDollar,
  IconFilterDown,
  IconMessageCircle,
  IconPhoto,
  IconSearch,
  IconSettings,
  IconSparkles,
  IconTrash,
} from "@tabler/icons-react";

const featuredSnippets: string[] = [
  "Sinh viên năm nhất SGU - Kinh nghiệm dưới 1 năm - Toán Lý Hóa cấp 2 - TP.HCM - Học phí: Dưới 1.948.500đ/tháng",
  "Sinh viên năm 3 HCMUS - Kinh nghiệm 2 năm - Toán THPT - Quận 5 - Học phí: 2.598.000–3.247.500đ/tháng",
  "Cử nhân Sư phạm Toán HNUE - 3 năm - Lý/Hóa 9 - Hà Nội - Dưới 3.897.000đ/tháng",
  "Thạc sĩ CNTT UET - 4 năm - Lập trình Python cơ bản - Cầu Giấy - 3.247.500đ/tháng",
  "Sinh viên năm 2 UEH - 1 năm - Toán tư duy Tiểu học - Quận 10 - 1.948.500đ/tháng",
  "GV tự do - 6 năm - IELTS Speaking 6.5+ - Tân Bình - 4.546.500đ/tháng",
  "Sinh viên năm 4 Bách Khoa - 2 năm - Vật Lý 11 - Thủ Đức - 2.857.800đ/tháng",
  "Cử nhân Ngôn ngữ Anh HUTECH - 3 năm - Tiếng Anh giao tiếp - Bình Thạnh - 2.598.000đ/tháng",
  "Sinh viên năm 3 SPKT - 2 năm - Tin học văn phòng - Quận 9 - 2.338.200đ/tháng",
  "Tiến sĩ Toán ĐHQG - 8 năm - Luyện thi HSG Toán - Hà Đông - 6.495.000đ/tháng",
  "Sinh viên năm nhất HUFLIT - <1 năm - Anh văn thiếu nhi - Gò Vấp - 1.948.500đ/tháng",
  "Cử nhân Hóa KHTN - 3 năm - Hóa 12 Ôn thi TN - Quận 3 - 3.247.500đ/tháng",
  "Sinh viên năm 2 SGU - 1–2 năm - Báo bài tổng hợp (Toán/Văn/Anh) - Phú Nhuận - 2.208.300đ/tháng",
  "Thạc sĩ Kinh tế UEH - 5 năm - Toán cao cấp đại cương - Quận 1 - 3.897.000đ/tháng",
  "Sinh viên năm 4 FTU - 2–3 năm - SAT Math - Hà Nội - 5.196.000đ/tháng",
];

export default function CourseFindOnline() {
  const [opened, { open, close }] = useDisclosure(false);

  const pills = Array(6)
    .fill(0)
    .map((_, index) => (
      <Pill key={index} withRemoveButton size="md">
        Item {index}
      </Pill>
    ));

  const renderSearchFeatured = () => (
    <>
      <Fieldset
        className="courseFind1v1"
        legend="Những tìm kiếm nổi bật"
        styles={{
          root: {
            borderColor: "var(--mantine-color-brand-5)",
            borderWidth: 1,
          },
          legend: {
            display: "inline-flex",
            width: "auto",
            margin: 0,
            padding: "0 4px",
            borderRadius: 8,
            fontSize: 16,
            color: "var(--mantine-color-brand-5)",
            fontWeight: 600,
          },
        }}
      >
        <Stack gap={10}>
          {featuredSnippets.map((item, idx) => (
            <Box key={idx} className="courseFind1v1-content">
              <Text fz="md" style={{ whiteSpace: "normal" }}>
                {item}
              </Text>
            </Box>
          ))}
        </Stack>
      </Fieldset>
    </>
  );

  const renderSearchMenu = () => (
    <Menu shadow="md">
      <Menu.Target>
        <Tooltip
          label={<Text size="md">Bộ sắp xếp</Text>}
          color="var(--mantine-color-brand-5)"
          variant="light"
          position="top"
        >
          <ActionIcon
            variant="filled"
            color={"var(--mantine-color-brand-5)"}
            size="lg"
          >
            <IconFilterDown size={30} stroke={1.5} color="white" />
          </ActionIcon>
        </Tooltip>
      </Menu.Target>

      <Menu.Dropdown>
        <Menu.Item
          leftSection={
            <IconSparkles size={16} color="var(--mantine-color-brand-5)" />
          }
        >
          <Text size="md">Khoá học mới nhất</Text>
        </Menu.Item>

        <Menu.Item
          leftSection={
            <Group gap={4}>
              <IconCurrencyDollar
                size={16}
                color="var(--mantine-color-brand-5)"
              />
              <IconArrowUp size={16} color="var(--mantine-color-brand-5)" />
            </Group>
          }
        >
          <Text size="md">Học phí tăng dần</Text>
        </Menu.Item>

        <Menu.Item
          leftSection={
            <Group gap={4}>
              <IconCurrencyDollar
                size={16}
                color="var(--mantine-color-brand-5)"
              />
              <IconArrowDown size={16} color="var(--mantine-color-brand-5)" />
            </Group>
          }
        >
          <Text size="md">Học phí giảm dần</Text>
        </Menu.Item>

        <Menu.Item
          leftSection={
            <Group gap={4}>
              <IconCalendar size={16} color="var(--mantine-color-brand-5)" />
              <IconArrowUp size={16} color="var(--mantine-color-brand-5)" />
            </Group>
          }
        >
          <Text size="md">Ngày tăng dần</Text>
        </Menu.Item>

        <Menu.Item
          leftSection={
            <Group gap={4}>
              <IconCalendar size={16} color="var(--mantine-color-brand-5)" />
              <IconArrowDown size={16} color="var(--mantine-color-brand-5)" />
            </Group>
          }
        >
          <Text size="md">Ngày giảm dần</Text>
        </Menu.Item>
      </Menu.Dropdown>
    </Menu>
  );

  return (
    <>
      <Stack gap={10}>
        <Flex align={"center"} justify={"space-between"}>
          <Text fz={25}>Danh Sách Khoá Học Online</Text>
          <Group gap={10}>
            <Input
              radius={"md"}
              placeholder="Nhập tên khoá học, giáo viên"
              w={400}
              rightSection={<IconSearch size={20} />}
              styles={{
                input: { fontSize: 16, color: "#333" },
              }}
            />
            {renderSearchMenu()}
            <Tooltip
              label={<Text size="md">Bộ tìm kiếm nhanh</Text>}
              color="var(--mantine-color-brand-5)"
              variant="light"
              position="top"
            >
              <ActionIcon
                variant="filled"
                color={"var(--mantine-color-brand-5)"}
                size="lg"
                onClick={open}
              >
                <IconAdjustments size={30} stroke={1.5} color="white" />
              </ActionIcon>
            </Tooltip>
          </Group>
        </Flex>
        <Flex gap={10}>
          <Text fz={16} fw={500} c={"dimmed"}>
            28 kết quả
          </Text>
          <Pill.Group flex={1}>{pills}</Pill.Group>
        </Flex>
      </Stack>
      <Modal
        size={"xl"}
        opened={opened}
        lockScroll={false}
        onClose={close}
        title={
          <Group gap={10}>
            <Text fz={18} fw={500}>
              Bộ tìm kiếm nhanh
            </Text>
            <Input
              w={400}
              radius={"md"}
              placeholder="Nhập dữ liệu tìm kiếm..."
              rightSection={<IconSearch size={20} />}
              styles={{
                input: { fontSize: 16, color: "#333" },
              }}
            />
          </Group>
        }
        zIndex={1000}
      >
        <Stack gap={5}>{renderSearchFeatured()}</Stack>
      </Modal>
    </>
  );
}
