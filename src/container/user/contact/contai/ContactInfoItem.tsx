"use client";
import MyTitleBasic from "@/components/client/mytitle/MyTitleBasic";
import { Card, Grid, Image, Stack, Text } from "@mantine/core";

type ContactItem = {
  title: string;
  subtitle: string;
  image: string;
  href: string;
  target?: "_self" | "_blank";
};

const CONTACTS: ContactItem[] = [
  {
    title: "Gọi Hotline",
    subtitle: "0764 513 977",
    image: "/images/contact/icon4.jpg",
    href: "tel:0764513977",
    target: "_self",
  },
  {
    title: "Nhắn tin Messenger",
    subtitle: "Messenger/T-Learning",
    image: "/images/contact/icon1.jpg",
    href: "https://m.me/duythuan28102002",
    target: "_blank",
  },
  {
    title: "Fanpage",
    subtitle: "Facebook/T-Learning",
    image: "/images/contact/icon2.jpg",
    href: "https://www.facebook.com/duythuan28102002",
    target: "_blank",
  },
  {
    title: "Nhắn tin Zalo",
    subtitle: "Zalo/T-Learning",
    image: "/images/contact/icon3.jpg",
    href: "https://zalo.me/0764513977",
    target: "_blank",
  },
];

export default function ContactInfoItem() {
  return (
    <Stack gap={20}>
      <MyTitleBasic
        textTitle="Trung tâm T-Learning"
        textDesc="Liên hệ trung tâm T-Learning để được tư vấn lộ trình học phù hợp dành cho bạn"
        colorTitle="var(--mantine-color-brand-5)"
      />

      <Grid>
        {CONTACTS.map((c, i) => (
          <Grid.Col span={{ base: 12, md: 3 }} key={i}>
            <Card
              component="a"
              href={c.href}
              target={c.target}
              rel={c.target === "_blank" ? "noopener noreferrer" : undefined}
              shadow="lg"
              radius="xl"
              style={{ cursor: "pointer", transition: "transform .18s ease" }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.transform = "translateY(-2px)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.transform = "translateY(0)")
              }
            >
              <Stack gap={0} align="center">
                <Image src={c.image} alt={c.title} w={60} h="100%" />
                <Text fz={22} fw={600} ta="center">
                  {c.title}
                </Text>
                <Text size="md" ta="center" c="var(--mantine-color-brand-5)">
                  {c.subtitle}
                </Text>
              </Stack>
            </Card>
          </Grid.Col>
        ))}
      </Grid>
    </Stack>
  );
}
