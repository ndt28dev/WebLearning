"use client";
import {
  Card,
  Center,
  Divider,
  Flex,
  Grid,
  Image,
  Stack,
  Text,
  Tooltip,
} from "@mantine/core";
import { ITeacher } from "@/modules/interface/ITeacher";
import { it } from "node:test";
import { IconAward } from "@tabler/icons-react";

type Props = {
  item: ITeacher;
};

export default function TeachersItem({ item }: Props) {
  return (
    <Grid.Col span={{ base: 12, md: 3 }} key={item.id}>
      <Tooltip
        bg={"white"}
        position="top-start"
        multiline
        maw={400}
        offset={8}
        zIndex={1}
        style={{ border: "1px solid var(--mantine-color-brand-2)" }}
        label={
          <Stack gap={5}>
            <Text size="lg" fw={600} c="var(--mantine-color-brand-5)">
              {item.name}
            </Text>
            <Divider />
            {item.experience &&
              item.experience.map((item, index) => (
                <Flex align={"center"} key={index}>
                  <Text size="md" c={"black"} flex={1}>
                    <IconAward
                      size={20}
                      color="var(--mantine-color-brand-5)"
                      style={{ marginBottom: -5 }}
                    />{" "}
                    {item}
                  </Text>
                </Flex>
              ))}
          </Stack>
        }
      >
        <Card
          p={"sm"}
          radius={"md"}
          bg={"white"}
          ta={"center"}
          className="teachersItem-item"
          style={{ boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 12px" }}
        >
          <Text fz={22} fw={600} c={"var(--mantine-color-brand-5)"}>
            {item.name}
          </Text>
          <Text size="sm">{item.degree}</Text>
          <Center>
            <Image
              bg={"white"}
              mt={10}
              src={item.image}
              alt={item.name}
              radius={99999}
              w={200}
              h={200}
            />
          </Center>
        </Card>
      </Tooltip>
    </Grid.Col>
  );
}
