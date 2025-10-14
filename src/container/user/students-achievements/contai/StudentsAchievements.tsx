import { IStudentResults } from "@/modules/interface/IStudentResults";
import {
  Badge,
  Box,
  Card,
  Flex,
  Image,
  Overlay,
  Stack,
  Text,
  Tooltip,
} from "@mantine/core";
import "@/styles/client/studentsAchievements/StudentsAchievements.scss";

type Props = {
  item?: IStudentResults;
};

export default function StudentsAchievements({ item }: Props) {
  return (
    <Card radius={"md"} p={0} shadow="md" className="studentResults">
      <Box style={{ overflow: "hidden" }}>
        <Image
          src={item?.avatar}
          alt={item?.name}
          radius={"md"}
          h={220}
          width={"100%"}
          fit="cover"
          style={{
            borderBottomLeftRadius: 0,
            borderBottomRightRadius: 0,
          }}
          className="studentResults-image"
        />
      </Box>
      <Flex align={"center"} p={"sm"} gap={10}>
        <Flex
          w={45}
          h={45}
          bg={"brand.0"}
          justify={"center"}
          align={"center"}
          style={{
            borderRadius: 8,
            border: "1px solid var(--mantine-color-brand-3)",
          }}
        >
          <Text size="md" c={"brand.5"} fw={700}>
            {item?.className}
          </Text>
        </Flex>
        <Stack gap={0}>
          <Text size="md" fw={600} className="studentResults-name">
            {item?.name}
          </Text>
          <Text size="sm">{item?.schoolName}</Text>
        </Stack>
      </Flex>
      <Badge
        size="md"
        color="brand.5"
        style={{
          position: "absolute",
          bottom: "26%",
          right: 0,
          borderTopRightRadius: 0,
          borderBottomRightRadius: 0,
        }}
      >
        {item?.result}
      </Badge>
    </Card>
  );
}
