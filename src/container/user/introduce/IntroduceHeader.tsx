import MyTitle from "@/components/client/mytitle/MyTitle";
import { introduceData } from "@/modules/data/DataIntroduce";
import { Box, Center, Container, Stack, Text } from "@mantine/core";

export default function IntroduceHeader() {
  const data = introduceData.introduceHeader;
  return (
    <Stack gap={0} bg={"var(--mantine-color-brand-1)"} p={50}>
      <Container size={"xl"}>
        <MyTitle topic={data.topic} />
        <Center>
          <Text size="lg" ta={"center"} w={700}>
            {data.description}
          </Text>
        </Center>
      </Container>
    </Stack>
  );
}
