"use client";
import { benefitsData } from "@/modules/data/DataBenefits";
import { IPrivilege } from "@/modules/interface/IPrivilege";
import { Accordion, Group, Stack, Text } from "@mantine/core";
import RenderHighlightedTitle from "../../home/contai/RenderHighlightedTitle";
import classes from "@/styles/client/benefits/StudentsBenefitsItem.module.scss";
import { IconCheck } from "@tabler/icons-react";

export default function StudentsBenefitsItem() {
  const data: IPrivilege[] = benefitsData.benefitsContent || [];

  const items = data.map((item, index) => (
    <Accordion.Item key={item.id} value={item.code!}>
      <Accordion.Control
        style={{ borderLeft: "5px solid var(--mantine-color-brand-5)" }}
        bg={"white"}
      >
        <Text size="lg" fw={500} c={"#333"}>
          {index + 1}. {item.title!}
        </Text>
      </Accordion.Control>
      <Accordion.Panel
        bg={"var(--mantine-color-brand-5)"}
        style={{ borderLeft: "5px solid var(--mantine-color-brand-5)" }}
        c={"white"}
      >
        <Stack gap={10}>
          {item.description?.map((item, idx) => (
            <Group gap={5} key={idx} align="center">
              <IconCheck size={18} color="white" />
              <Text size="md">{item}</Text>
            </Group>
          ))}
        </Stack>
      </Accordion.Panel>
    </Accordion.Item>
  ));
  return (
    <Stack gap={10}>
      <Text fz={25} fw={600} ta={"left"} c={"var(--mantine-color-brand-5)"}>
        Quyền lợi của học viên
      </Text>
      <Accordion
        defaultValue="Apples"
        transitionDuration={500}
        classNames={classes}
      >
        {items}
      </Accordion>
    </Stack>
  );
}
