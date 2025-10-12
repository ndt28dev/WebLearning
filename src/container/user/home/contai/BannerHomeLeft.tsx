import MyButton from "@/components/mybutton/MyButton";
import MyGroupText from "@/components/mygrouptext/MyGroupText";
import { homeMockData } from "@/modules/data/DataHome";
import { IBannerHome } from "@/modules/interface/IHome";
import {
  Avatar,
  Center,
  Flex,
  Group,
  Image,
  Stack,
  Text,
  Title,
} from "@mantine/core";
import { IconCheck } from "@tabler/icons-react";
import RenderHighlightedTitle from "./RenderHighlightedTitle";
export default function BannerHomeLeft() {
  const data: IBannerHome = homeMockData.bannerHomeData;

  return (
    <Stack gap={"lg"}>
      <Title w={"90%"} fz={45}>
        <RenderHighlightedTitle
          text={data.title}
          highlights={data.highlights || []}
        />
      </Title>
      <Stack gap={5}>
        {data.listInfo.map((item, index) => (
          <MyGroupText
            key={index}
            gap="5"
            icon={<IconCheck size={20} color="var(--mantine-color-brand-5)" />}
            text1={item}
          />
        ))}
      </Stack>
      <Group gap={"md"}>
        <MyButton
          label={data.buttonList[0].label}
          link={data.buttonList[0].link}
          variant={data.buttonList[0].variant}
          size={data.buttonList[0].size}
          radius={data.buttonList[0].radius}
          color="var(--mantine-color-brand-5)"
        />
        <MyButton
          label={data.buttonList[1].label}
          link={data.buttonList[1].link}
          variant={data.buttonList[1].variant}
          size={data.buttonList[1].size}
          radius={data.buttonList[1].radius}
          color="var(--mantine-color-brand-5)"
        />
      </Group>
      <Image src={data.imageStudent} w={120} h={35} />

      <Flex align={"center"} justify={"space-between"}>
        <Stack>
          <Group gap={5}>
            <Text size="md" fw={600}>
              {data.numStudent.toLocaleString("en-US")} học
            </Text>
            <Text size="md">viên tại TP.HCM</Text>
          </Group>
          <Group gap={"xs"}>
            <Group gap={10} bg={"#F3F3F5"} p={5} style={{ borderRadius: 8 }}>
              <Center w={30}>
                <Avatar src="/images/banner/google.png" alt="gg" size={20} />
              </Center>
              <Group
                gap={5}
                bg={"white"}
                style={{ borderRadius: 8, padding: "4px 12px" }}
              >
                <Text size="md">
                  <span style={{ fontWeight: 600, fontSize: 20 }}>4.5</span>
                  /5
                </Text>
              </Group>
            </Group>
            <Group gap={10} bg={"#F3F3F5"} p={5} style={{ borderRadius: 8 }}>
              <Center w={30}>
                <Avatar
                  src="/images/banner/communication.png"
                  alt="fb"
                  size={20}
                />
              </Center>
              <Group
                gap={5}
                bg={"white"}
                style={{ borderRadius: 8, padding: "4px 10px" }}
              >
                <Text size="md">
                  <span style={{ fontWeight: 600, fontSize: 20 }}>4.1</span>
                  /5
                </Text>
              </Group>
            </Group>
          </Group>
        </Stack>
        <Stack>
          <Text size="md">Đối tác uy tín của hai đơn vị</Text>
          <Group justify="space-between">
            <Image src="/images/banner/dv2.webp" w={90} />
            <Image src="/images/banner/dv1.webp" w={90} />
          </Group>
        </Stack>
      </Flex>
    </Stack>
  );
}
