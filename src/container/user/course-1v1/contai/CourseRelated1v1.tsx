"use client";
import MyTitle from "@/components/client/mytitle/MyTitle";
import MyButton from "@/components/mybutton/MyButton";
import { dataCourses1v1 } from "@/modules/data/DataCourse1v1";
import { ICourse1v1 } from "@/modules/interface/Icourse1v1";
import { Carousel } from "@mantine/carousel";
import { Flex, Stack } from "@mantine/core";
import { IconChevronRight } from "@tabler/icons-react";
import CourseItem1v1 from "./CourseItem1v1";
import "@/styles/client/course/CourseCarousel.scss";

export default function CourseRelated1v1() {
  const renderListCourse = (data: ICourse1v1[]) => (
    <Carousel
      className="carousel"
      withControls={data.length > 3}
      withIndicators={data.length > 3}
      slideSize={{ base: "100%" }}
      slideGap="md"
      pr={100}
      pl={100}
      emblaOptions={{ loop: true, align: "start" }}
    >
      {data.map((item) => (
        <Carousel.Slide key={item.id}>
          <CourseItem1v1 item={item} display={false} />
        </Carousel.Slide>
      ))}
    </Carousel>
  );
  return (
    <Stack pt={50} pb={50} gap={5} className="courseCarousel">
      <Flex justify={"space-between"}>
        <MyTitle topic={"Học kèm 1v1 cùng gia sư"} />
        <MyButton
          label={"Xem tất cả"}
          link={"/courses-1v1"}
          icon1={<IconChevronRight size={20} />}
          variant="filled"
        />
      </Flex>
      {renderListCourse(dataCourses1v1)}
    </Stack>
  );
}
