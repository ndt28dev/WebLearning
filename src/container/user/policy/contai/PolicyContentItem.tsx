"use client";
import { policyData } from "@/modules/data/DataPolicy";
import { IPolicyContents } from "@/modules/interface/IPolicyData";
import {
  Box,
  Card,
  Flex,
  Grid,
  Group,
  Image,
  Paper,
  Stack,
  Text,
} from "@mantine/core";
import "@/styles/client/policy/Policy.scss";
import { formatDate } from "@/utils/format";
import { IconClock } from "@tabler/icons-react";

export default function PolicyContentItem() {
  const data: IPolicyContents = policyData.policyContents || {};

  const scrollToId = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;

    const headerHVar = getComputedStyle(document.documentElement)
      .getPropertyValue("--app-header-height")
      .trim();
    const headerH = parseInt(headerHVar || "60", 10);
    const offset = headerH + 12; // đệm 12px

    const y = el.getBoundingClientRect().top + window.scrollY - offset;
    window.scrollTo({ top: y, behavior: "smooth" });
  };

  return (
    <Grid className="policyContentItem">
      <Grid.Col span={{ base: 12, md: 3 }} p={10}>
        <Card
          p={"md"}
          radius={"md"}
          bg={"var(--mantine-color-brand-0)"}
          style={{
            border: "1px solid var(--mantine-color-brand-2)",
          }}
        >
          <Text size="lg" mb={10} c={"var(--mantine-color-brand-5)"}>
            Nội dung
          </Text>
          <Stack gap={0}>
            {data.contents?.map(
              (item, index) =>
                item.menu && (
                  <Stack gap={0} key={index}>
                    <Text
                      size="lg"
                      fw={600}
                      key={index}
                      style={{ cursor: "pointer" }}
                      className="policyContentItem-text"
                      onClick={() => scrollToId(`${item.menu?.code}`)}
                    >
                      {item.menu.code}. {item.menu.label}
                    </Text>
                    <Stack gap={3} p={5}>
                      {item.menu.items &&
                        item.menu.items.map((it, index) => (
                          <Stack key={index}>
                            <Text
                              size="md"
                              style={{ cursor: "pointer" }}
                              className="policyContentItem-text"
                              onClick={() => scrollToId(`${it.code}`)}
                            >
                              {it.code}. {it.label}
                            </Text>
                          </Stack>
                        ))}
                    </Stack>
                  </Stack>
                )
            )}
          </Stack>
        </Card>
      </Grid.Col>
      <Grid.Col span={{ base: 12, md: 9 }} p={10} h="100%">
        <Card
          p={"md"}
          radius={"md"}
          h="100%"
          style={{
            border: "1px solid var(--mantine-color-brand-2)",
          }}
        >
          <Stack gap={10}>
            <Flex align={"center"} justify={"space-between"}>
              <Group gap={5}>
                <Image
                  radius="md"
                  h="35px"
                  w="auto"
                  fit="contain"
                  src="/images/logo/logo.png"
                />
                <Text size="md" fw={500} c={"var(--mantine-color-brand-5)"}>
                  T-Learning
                </Text>
              </Group>
              <Group gap={5} align="center">
                <IconClock
                  style={{ marginBottom: -4 }}
                  size={20}
                  color="var(--mantine-color-brand-5)"
                />
                <Text size="md" fw={500} c={"var(--mantine-color-brand-5)"}>
                  {data.day && formatDate(data.day)}
                </Text>
              </Group>
            </Flex>

            <span
              dangerouslySetInnerHTML={{
                __html: data.contents?.[0]?.html || "",
              }}
            />
            <span
              dangerouslySetInnerHTML={{
                __html: data.contents?.[1]?.html || "",
              }}
            />
          </Stack>
        </Card>
      </Grid.Col>
    </Grid>
  );
}
