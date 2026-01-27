"use client";
import MyTitleBasic from "@/components/client/mytitle/MyTitleBasic";
import { teachersData } from "@/modules/data/DataTeachers";
import { ITeacher } from "@/modules/interface/ITeacher";
import { ITeacherAdvisor } from "@/modules/interface/ITeacherData";
import { Carousel } from "@mantine/carousel";
import { Card, Center, Image, Stack, Text } from "@mantine/core";
import "@/styles/client/teachers/TeacherAdvisor.scss";

export default function TeacherAdvisorItem() {
  const data: ITeacherAdvisor = teachersData.teachersAdvisor || {};

  const renderItem = (item: ITeacher) => (
    <Card
      radius={"md"}
      bg={"white"}
      ta={"center"}
      style={{ border: "1px solid var(--mantine-color-brand-2)" }}
    >
      <Text fz={22} fw={600} c={"var(--mantine-color-brand-5)"}>
        {item.name}
      </Text>
      <Center>
        <Image
          bg={"white"}
          mt={10}
          src={item.image}
          alt={item.name}
          radius={99999}
          w={200}
          h={200}
        />
      </Center>
    </Card>
  );

  return (
    <Stack gap={20} className="teacherAdvisorItem">
      <MyTitleBasic
        textTitle={data.title}
        textDesc={data.description}
        colorTitle="var(--mantine-color-brand-5)"
      />
      <Carousel
        className="carousel"
        withIndicators
        slideSize={{ base: "100%", sm: "50%", md: "25%" }}
        loop
        align="start"
      >
        {data.advisors &&
          data.advisors.map((item, index) => (
            <Carousel.Slide key={index} p={10}>
              {renderItem(item as ITeacher)}
            </Carousel.Slide>
          ))}
      </Carousel>
    </Stack>
  );
}
