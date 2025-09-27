"use client";
import { Box, Container, Grid } from "@mantine/core";
import "@/styles/client/home/BannerHome.scss";
import { homeMockData } from "@/modules/data/DataHome";
import { IBannerHome, IHome } from "@/modules/interface/IHome";
import BannerHomeLeft from "./contai/BannerHomeLeft";
import BannerHomeRight from "./contai/BannerHomeRight";

export default function BannerHome() {
  return (
    <Box p={"lg"} className="bannerHome">
      <Container size={"xl"} h="100%">
        <Grid align="center" gutter={60}>
          <Grid.Col span={{ base: 12, md: 6 }}>
            <BannerHomeLeft />
          </Grid.Col>
          <Grid.Col span={{ base: 12, md: 6 }}>
            <BannerHomeRight />
          </Grid.Col>
        </Grid>
      </Container>
    </Box>
  );
}
