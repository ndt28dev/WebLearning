import { homeMockData } from "@/modules/data/DataHome";
import { IFeatureBoxHome } from "@/modules/interface/IHome";
import {
  Badge,
  Card,
  Flex,
  Grid,
  Stack,
  Text,
  ThemeIcon,
  Title,
} from "@mantine/core";
import { IconBook, IconCertificate, IconSchool } from "@tabler/icons-react";

const icons = [IconSchool, IconBook, IconCertificate];

export default function FeatureSectionHomeCon() {
  const data: IFeatureBoxHome[] = homeMockData.featureBoxData;

  const getIconByIndex = (index: number) => {
    const IconComp = icons[index % icons.length];
    return (
      <ThemeIcon
        variant="light"
        radius="xl"
        size={50}
        style={{
          background: "var(--mantine-color-brand-5)",
        }}
      >
        <IconComp size={28} stroke={1.8} color="white" />
      </ThemeIcon>
    );
  };
  return (
    <Grid gutter={40} pt={50}>
      {data.map((item, index) => (
        <Grid.Col key={index} span={4}>
          <Card
            h="100%"
            radius={"md"}
            style={{
              border: "1px solid var(--mantine-color-brand-3)",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <Flex gap={10} align="center" justify="center">
              {getIconByIndex(index)}
              <Stack gap={5} align="center">
                <Title order={3} c={"#333"}>
                  {item.title}
                </Title>
                <Text ta={"center"} size="md" style={{ lineHeight: "1.2" }}>
                  {item.description}
                </Text>
              </Stack>
            </Flex>
          </Card>
        </Grid.Col>
      ))}
    </Grid>
  );
}
