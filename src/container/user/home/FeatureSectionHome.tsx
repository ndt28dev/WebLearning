"use client";
import { homeMockData } from "@/modules/data/DataHome";
import { IFeatureBoxHome } from "@/modules/interface/IHome";
import {
  Box,
  Card,
  Container,
  Flex,
  Grid,
  Group,
  Stack,
  Text,
  Title,
} from "@mantine/core";
import { IconSchool } from "@tabler/icons-react";
import FeatureSectionHomeCon from "./contai/FeatureSectionHomeCon";
import Introduce from "./contai/Introduce";

export default function FeatureSectionHome() {
  return (
    <Box
      style={{
        backgroundImage: "url('/images/banner/bgr5.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <Container size={"xl"}>
        <FeatureSectionHomeCon />
        <Introduce />
      </Container>
    </Box>
  );
}
