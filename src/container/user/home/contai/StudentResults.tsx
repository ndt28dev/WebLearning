"use client";
import MyTitle from "@/components/client/mytitle/MyTitle";
import { homeMockData } from "@/modules/data/DataHome";
import { IStudentResultsHome } from "@/modules/interface/IHome";
import {
  Badge,
  Box,
  Card,
  Center,
  Flex,
  Grid,
  Image,
  Overlay,
  Stack,
  Text,
  Tooltip,
} from "@mantine/core";
import "@/styles/client/home/StudentResults.scss";
import MyButton from "@/components/mybutton/MyButton";
import { IStudentResults } from "@/modules/interface/IStudentResults";

export default function StudentResults() {
  const data: IStudentResultsHome = homeMockData.studentResultsData;

  const renderListStudentResult = (data: IStudentResults[]) => (
    <Grid>
      {data.map((item, index) => (
        <Grid.Col span={{ base: 12, md: 4 }} key={item.id}>
          <Card radius={"md"} p={0} shadow="md" className="student_card">
            <Image
              src={item.avatar}
              alt={item.name}
              radius={"md"}
              h={220}
              width={"100%"}
              fit="cover"
              style={{
                borderBottomLeftRadius: 0,
                borderBottomRightRadius: 0,
              }}
            />
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
                  {item.className}
                </Text>
              </Flex>
              <Stack gap={0}>
                <Text size="md" fw={600}>
                  {item.name}
                </Text>
                <Text size="sm">{item.schoolName}</Text>
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
              {item.result}
            </Badge>
            <Overlay
              color="#000"
              backgroundOpacity={0.6}
              className="student_overlay"
              zIndex={1}
            >
              <Tooltip label={item.name} bg={"white"} c={"black"}>
                <Text c="white" fz="md" style={{ textDecoration: "underline" }}>
                  Xem thêm
                </Text>
              </Tooltip>
            </Overlay>
          </Card>
        </Grid.Col>
      ))}
    </Grid>
  );
  return (
    <Stack pt={50} pb={50} gap={5} className="studentResults">
      <MyTitle topic={data.topic} />
      {renderListStudentResult(data.studentResults)}
      <Center mt={30}>
        <MyButton
          label="Xem thêm"
          link="/courses"
          variant="filled"
          size="md"
          color="brand.5"
        />
      </Center>
    </Stack>
  );
}
