import MyTitle from "@/components/client/mytitle/MyTitle";
import MyButton from "@/components/mybutton/MyButton";
import { homeMockData } from "@/modules/data/DataHome";
import { IIntroduceHome } from "@/modules/interface/IHome";
import { Carousel } from "@mantine/carousel";
import { Box, Grid, Image, Stack, Text, Title } from "@mantine/core";
import Autoplay from "embla-carousel-autoplay";
import {
  IconChevronRight,
  IconSignRight,
  IconStack,
  IconStar,
} from "@tabler/icons-react";
import RenderHighlightedTitle from "./RenderHighlightedTitle";
import { useRef } from "react";

export default function Introduce() {
  const data: IIntroduceHome = homeMockData.introduceData;

  const autoplay = useRef(Autoplay({ delay: 10000 }));

  const renderColumnLeft = (data: IIntroduceHome) => (
    <Carousel
      withIndicators={data.images.length > 1}
      withControls={false}
      plugins={[autoplay.current]}
      styles={{
        indicator: {
          width: 10,
          height: 10,
        },
      }}
    >
      {data.images.map((item, index) => (
        <Carousel.Slide key={index}>
          <Image
            src={item}
            alt="introduce-error-iamge"
            radius={"md"}
            h={"567px"}
            w={"100%"}
            fit="cover"
          />
        </Carousel.Slide>
      ))}
    </Carousel>
  );

  const renderColumnRight = (data: IIntroduceHome) => (
    <Stack gap={20}>
      <Text fw={700} fz={30}>
        <RenderHighlightedTitle
          text={data.title}
          highlights={data.highlights || []}
        />
      </Text>
      {data.description.map((item, index) => (
        <Stack key={index} gap={5}>
          <Text pb={20} style={{ borderBottom: "1px solid #E3E9F0" }} size="md">
            {item}
          </Text>
        </Stack>
      ))}
      <Box>
        <MyButton
          label="Xem tất cả"
          link="/"
          variant="filled"
          color="brand.5"
          size="md"
          icon1={<IconChevronRight size={20} />}
        />
      </Box>
    </Stack>
  );

  return (
    <Stack pt={50} pb={50} gap={5}>
      <MyTitle topic={data.topic} />
      <Grid gutter={40} align="center">
        <Grid.Col span={{ base: 12, md: 6 }}>{renderColumnLeft(data)}</Grid.Col>
        <Grid.Col span={{ base: 12, md: 6 }}>
          {renderColumnRight(data)}
        </Grid.Col>
      </Grid>
    </Stack>
  );
}
