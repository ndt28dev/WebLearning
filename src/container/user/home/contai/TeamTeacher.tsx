"use client";
import MyTitle from "@/components/client/mytitle/MyTitle";
import MyButton from "@/components/mybutton/MyButton";
import { homeMockData } from "@/modules/data/DataHome";
import { ITuTorHome } from "@/modules/interface/IHome";
import { ITutor } from "@/modules/interface/ITuTor";
import { Carousel } from "@mantine/carousel";
import {
  Avatar,
  Badge,
  Box,
  Card,
  Flex,
  Grid,
  Group,
  Image,
  Modal,
  ScrollArea,
  SimpleGrid,
  Stack,
  Text,
  ThemeIcon,
  Tooltip,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import {
  IconAlignLeft,
  IconCheck,
  IconChevronRight,
  IconClock,
  IconSchool,
  IconTrophy,
} from "@tabler/icons-react";
import { mock } from "node:test";
import { useEffect, useState } from "react";
import "@/styles/client/home/TeamTeacher.scss";
import MyModalImage from "@/components/mymodal/MyModalImage";
import MyGroupText from "@/components/mygrouptext/MyGroupText";

const chunkArray = <T,>(array: T[], size: number): T[][] => {
  const result: T[][] = [];
  for (let i = 0; i < array.length; i += size) {
    result.push(array.slice(i, i + size));
  }
  return result;
};

export default function TeamTeacher() {
  const data: ITuTorHome = homeMockData.tutorData;
  const [selectedTutor, setSelectedTutor] = useState<ITutor>(data.tutors[0]);
  const [opened, { open, close }] = useDisclosure(false);

  const [activeSlide, setActiveSlide] = useState(
    data.tutors.findIndex((t) => t.id === selectedTutor.id)
  );

  const tutorsPerSlide = 4;

  const tutorChunks = chunkArray(data.tutors, tutorsPerSlide);

  const [emblaRight, setEmblaRight] = useState<any>(null);
  const [emblaLeft, setEmblaLeft] = useState<any>(null);

  const handleSelectTutor = (id: number, item: ITutor) => {
    const index = data.tutors.findIndex((tutor) => tutor.id === id);
    setSelectedTutor(item);
    setActiveSlide(index);
    if (emblaRight) {
      emblaRight.scrollTo(index);
    }
  };

  useEffect(() => {
    if (!emblaRight) return;

    const onSelect = () => {
      const i = emblaRight.selectedScrollSnap();
      const chunkIndex = Math.floor(i / tutorsPerSlide);

      if (emblaLeft) {
        emblaLeft.scrollTo(chunkIndex);
      }
      setActiveSlide(i);
      setSelectedTutor(data.tutors[i]);
    };

    emblaRight.on("select", onSelect);
    onSelect();

    return () => emblaRight.off("select", onSelect);
  }, [emblaRight, tutorsPerSlide, tutorChunks, data.tutors]);

  const renderColumnLeft = (tutorChunks: ITutor[][]) => (
    <Carousel
      withControls={data.tutors.length > tutorsPerSlide}
      orientation="vertical"
      height={518}
      className="carousel"
      getEmblaApi={setEmblaLeft}
    >
      {tutorChunks.map((chunk, i) => (
        <Carousel.Slide key={i} mb={1}>
          <Stack gap={10} pr={8} bg={"white"}>
            {chunk.map((item) => (
              <Flex
                direction="column"
                justify="center"
                p="xs"
                key={item.id}
                style={{
                  border: `1px solid ${
                    item.id === selectedTutor.id
                      ? "var(--mantine-color-brand-2)"
                      : "#DFE1E6"
                  }`,
                  borderRadius: "10px",
                  cursor: "pointer",
                }}
                bg={
                  item.id === selectedTutor.id
                    ? "var(--mantine-color-brand-0)"
                    : ""
                }
                onClick={() => handleSelectTutor(item.id, item)}
              >
                <Flex justify="start" align="center" gap={10}>
                  <Avatar
                    src={item.image}
                    alt={item.name}
                    size={100}
                    style={{
                      border: "2px solid var(--mantine-color-blue-2)",
                    }}
                  />
                  <Stack gap={0} w="100%">
                    <Text size="lg" fw={600}>
                      {item.name}
                    </Text>
                    <Text size="sm" lineClamp={1}>
                      {item.university}
                    </Text>
                    <Group gap={5} mt={8}>
                      {item.subjects.map((subject, index) => (
                        <Badge
                          key={index}
                          size="md"
                          bg="var(--mantine-color-brand-5)"
                        >
                          {subject}
                        </Badge>
                      ))}
                    </Group>
                  </Stack>
                </Flex>
              </Flex>
            ))}
          </Stack>
        </Carousel.Slide>
      ))}
    </Carousel>
  );

  const renderColumnRight = (data: ITutor[]) => (
    <Carousel
      withControls={false}
      orientation="vertical"
      height={519}
      className="carousel"
      getEmblaApi={setEmblaRight}
    >
      {data.map((item, i) => (
        <Carousel.Slide key={i}>
          <Card radius={"md"} p={"sm"} style={{ border: "1px solid #DFE1E6" }}>
            <Stack gap={10}>
              <Flex align={"center"} justify={"space-between"}>
                <Text size="xl" fw={600}>
                  {item.name}
                </Text>
                <Badge
                  size="lg"
                  c={"var(--mantine-color-brand-5)"}
                  bg={"var(--mantine-color-brand-0)"}
                >
                  {item.degree}
                </Badge>
              </Flex>
              <MyGroupText
                gap="5"
                icon={
                  <ThemeIcon variant="light" size="lg">
                    <IconClock
                      color="var(--mantine-color-brand-5)"
                      style={{ width: "70%", height: "70%" }}
                    />
                  </ThemeIcon>
                }
                text1={item.experience}
              />
              <MyGroupText
                gap="5"
                icon={
                  <ThemeIcon variant="light" size="lg">
                    <IconTrophy
                      color="var(--mantine-color-brand-5)"
                      style={{ width: "70%", height: "70%" }}
                    />
                  </ThemeIcon>
                }
                text1={item.examScore}
              />
              <Flex align={"center"} gap={10}>
                <MyButton label={"Xem hồ sơ"} link={""} variant="filled" />
              </Flex>
              <div
                style={{ height: "0.5px", backgroundColor: "#E3E9F0" }}
              ></div>
              <Stack gap={10}>
                <Flex align={"center"} justify={"space-between"} gap={10}>
                  <Text fw={500} size="md">
                    {item.certificateName}
                  </Text>
                  <Text
                    size="md"
                    style={{
                      textDecoration: "underline",
                      cursor: "pointer",
                      color: "var(--mantine-color-brand-5)",
                    }}
                    onClick={open}
                  >
                    Hình ảnh
                  </Text>
                </Flex>
                <Image
                  src={item.admissionImage}
                  alt="it's me"
                  radius={"md"}
                  maw={"100%"}
                  mah={270}
                  fit="cover"
                  onClick={open}
                  style={{ cursor: "zoom-in" }}
                />
              </Stack>
            </Stack>
          </Card>
        </Carousel.Slide>
      ))}
    </Carousel>
  );
  return (
    <>
      <Stack pt={50} pb={50} gap={5}>
        <Flex justify={"space-between"}>
          <MyTitle topic={data.topic} index={true} />
          <MyButton
            label={"Xem tất cả"}
            link={"/teachers"}
            icon1={<IconChevronRight size={20} />}
            variant="filled"
          />
        </Flex>
        <Grid>
          <Grid.Col span={{ base: 12, md: 6 }} className="teamTeacher">
            {renderColumnLeft(tutorChunks)}
          </Grid.Col>
          <Grid.Col span={{ base: 12, md: 6 }}>
            {renderColumnRight(data.tutors)}
          </Grid.Col>
        </Grid>
      </Stack>
      <MyModalImage
        opened={opened}
        close={close}
        image={selectedTutor.admissionImage ?? ""}
      />
    </>
  );
}
