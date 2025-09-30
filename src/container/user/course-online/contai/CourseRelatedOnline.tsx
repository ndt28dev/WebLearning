"use client";
import MyTitle from "@/components/client/mytitle/MyTitle";
import MyButton from "@/components/mybutton/MyButton";
import { ICourseOnline } from "@/modules/interface/ICourseOnline";
import { Carousel } from "@mantine/carousel";
import { Center, Flex, Stack } from "@mantine/core";
import { courseOnlinesData } from "@/modules/data/DataCourseOnline";
import { IconChevronRight } from "@tabler/icons-react";
import "@/styles/client/course/CourseCarousel.scss";
import CourseItemOnline from "./CourseItemOnline";

export default function CourseRelatedOnline() {
  const renderListCourse = (data: ICourseOnline[]) => (
    <Carousel
      className="carousel"
      withControls={data.length > 3}
      withIndicators={data.length > 3}
      slideSize={{ base: "100%", sm: "50%", md: "33.33333%" }}
      slideGap="md"
      emblaOptions={{ loop: true, align: "start" }}
    >
      {data.map((item) => (
        <Carousel.Slide key={item.id}>
          <CourseItemOnline item={item} display={false} />
        </Carousel.Slide>
      ))}
    </Carousel>
  );
  return (
    <Stack pt={50} pb={50} gap={5} className="courseCarousel">
      <Flex justify={"space-between"}>
        <MyTitle topic={"Khoá học Online"} />
        <MyButton
          label={"Xem tất cả"}
          link={"/courses-online"}
          icon1={<IconChevronRight size={20} />}
          variant="filled"
        />
      </Flex>
      {renderListCourse(courseOnlinesData)}
    </Stack>
  );
}
