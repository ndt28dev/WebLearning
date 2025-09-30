import { Box, Center, Stack, Text } from "@mantine/core";

type Props = {
  textTitle?: string;
  textDesc?: string;
  colorTitle?: string;
  colorDesc?: string;
  taText?: boolean;
};

export default function MyTitleBasic({
  textTitle,
  textDesc,
  colorTitle = "#333",
  colorDesc,
  taText = false,
}: Props) {
  return (
    <Stack gap={10}>
      <Text fz={30} fw={700} ta={taText ? "left" : "center"} c={colorTitle}>
        {textTitle}
      </Text>

      <Center>
        <Text
          fz={20}
          w={taText ? "100%" : 700}
          ta={taText ? "left" : "center"}
          c={colorDesc}
        >
          {textDesc}
        </Text>
      </Center>
    </Stack>
  );
}
