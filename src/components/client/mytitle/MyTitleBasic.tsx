import { Box, Center, Stack, Text } from "@mantine/core";

type Props = {
  textTitle?: string;
  textDesc?: string;
  colorTitle?: string;
  colorDesc?: string;
};

export default function MyTitleBasic({
  textTitle,
  textDesc,
  colorTitle,
  colorDesc,
}: Props) {
  return (
    <Stack gap={10}>
      <Text fz={30} fw={700} ta={"center"} c={colorTitle}>
        {textTitle}
      </Text>

      <Center>
        <Text fz={20} w={700} ta={"center"} c={colorDesc}>
          {textDesc}
        </Text>
      </Center>
    </Stack>
  );
}
