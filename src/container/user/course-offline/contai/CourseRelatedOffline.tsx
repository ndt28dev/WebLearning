"use client";
import MyTitle from "@/components/client/mytitle/MyTitle";
import MyButton from "@/components/mybutton/MyButton";
import { ICourseOffline } from "@/modules/interface/ICourseOffline";
import { Carousel } from "@mantine/carousel";
import { Flex, Stack } from "@mantine/core";
import { IconChevronRight } from "@tabler/icons-react";
import CourseItemOffline from "./CourseItemOffline";
import { courseOfflinesData } from "@/modules/data/DataCourseOffline";
import "@/styles/client/course/CourseCarousel.scss";

export default function CourseRelatedOffline() {
  const renderListCourse = (data: ICourseOffline[]) => (
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
          <CourseItemOffline item={item} display={false} />
        </Carousel.Slide>
      ))}
    </Carousel>
  );
  return (
    <Stack pt={50} pb={50} gap={5} className="courseCarousel">
      <Flex justify={"space-between"}>
        <MyTitle topic={"Khoá học Offline"} />
        <MyButton
          label={"Xem tất cả"}
          link={"/courses-offline"}
          icon1={<IconChevronRight size={20} />}
          variant="filled"
        />
      </Flex>
      {renderListCourse(courseOfflinesData)}
    </Stack>
  );
}
