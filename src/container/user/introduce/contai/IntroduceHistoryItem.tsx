import MyTitleBasic from "@/components/client/mytitle/MyTitleBasic";
import { introduceData } from "@/modules/data/DataIntroduce";
import { formatMonthAndYearString } from "@/utils/format";
import { Flex, Stack, Text } from "@mantine/core";

export default function IntroduceHistoryItem() {
  const data = introduceData.introduceHistory;

  return (
    <Stack gap={10}>
      <MyTitleBasic
        textTitle={data.topic}
        textDesc={data.description}
        colorTitle="var(--mantine-color-brand-5)"
      />
      <Stack gap={10}>
        {data.history.map((item, index) =>
          index % 2 === 0 ? (
            <Flex key={index}>
              <Stack
                p={10}
                style={{
                  borderLeft: "4px solid var(--mantine-color-brand-5)",
                  borderRadius: "10px 5px 5px 10px",
                }}
                gap={0}
                bg={"var(--mantine-color-brand-0)"}
                w={"100%"}
              >
                <Text size="xl" fw={600} mb={5}>
                  {formatMonthAndYearString(item.day)}
                </Text>
                <Text size="lg" fw={500} c={"var(--mantine-color-brand-5)"}>
                  {item.title}
                </Text>
                <Text size="lg">{item.desc}</Text>
              </Stack>
            </Flex>
          ) : (
            <Flex justify={"end"} key={index}>
              <Stack
                p={10}
                style={{
                  borderRight: "4px solid var(--mantine-color-brand-5)",
                  borderRadius: "5px 10px 10px 5px",
                }}
                bg={"var(--mantine-color-brand-1)"}
                gap={0}
                w={"100%"}
              >
                <Text size="xl" fw={600} mb={5} ta={"right"}>
                  {formatMonthAndYearString(item.day)}
                </Text>
                <Text
                  size="lg"
                  fw={500}
                  ta={"right"}
                  c={"var(--mantine-color-brand-5)"}
                >
                  {item.title}
                </Text>
                <Text size="lg" ta={"right"}>
                  {item.desc}
                </Text>
              </Stack>
            </Flex>
          )
        )}
      </Stack>
    </Stack>
  );
}
