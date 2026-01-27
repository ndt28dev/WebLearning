import MyGroupText from "@/components/mygrouptext/MyGroupText";
import { IDetailsPartner, IPartner } from "@/modules/interface/IPartner";
import { formatDate } from "@/utils/format";
import { Box, Flex, Grid, Image, Stack, Text, ThemeIcon } from "@mantine/core";
import {
  Icon12Hours,
  IconBook,
  IconCalendar,
  IconMapPin,
  IconPhoneCall,
  IconUser,
} from "@tabler/icons-react";
import { format } from "path";

type Props = {
  item: IPartner;
};
export default function PartnerModal({ item }: Props) {
  return (
    <>
      <Grid>
        <Grid.Col span={{ base: 12, md: 6 }}>
          <Stack gap={5}>
            <MyGroupText
              icon={
                <ThemeIcon variant="light" size="lg">
                  <IconCalendar
                    size={20}
                    color="var(--mantine-color-brand-5)"
                  />
                </ThemeIcon>
              }
              text1="Ngày hợp tác:"
              text2={
                item.detailsPartner?.since &&
                formatDate(item.detailsPartner.since)
              }
            />
            <MyGroupText
              icon={
                <ThemeIcon variant="light" size="lg">
                  <IconPhoneCall
                    size={20}
                    color="var(--mantine-color-brand-5)"
                  />
                </ThemeIcon>
              }
              text1="Hotline:"
              text2={item.detailsPartner?.phone}
            />
            <MyGroupText
              icon={
                <ThemeIcon variant="light" size="lg">
                  <IconUser size={20} color="var(--mantine-color-brand-5)" />
                </ThemeIcon>
              }
              text1="Người liên hệ:"
              text2={item.detailsPartner?.contactPerson}
            />
          </Stack>
        </Grid.Col>
        <Grid.Col span={{ base: 12, md: 6 }}>
          <Stack gap={5}>
            <Box h={80}>
              <Image
                src={item.image}
                alt={item.name}
                w="100%"
                h={"100%"}
                fit="contain"
              />
            </Box>
            <Text
              size="sm"
              ta={"center"}
              c={"blue"}
              component="a"
              href={item.detailsPartner?.website}
              target="_blank"
            >
              {item.detailsPartner?.website}
            </Text>
          </Stack>
        </Grid.Col>
      </Grid>
      <Stack gap={5} mt={5}>
        <MyGroupText
          icon={
            <ThemeIcon variant="light" size="lg">
              <IconMapPin size={20} color="var(--mantine-color-brand-5)" />
            </ThemeIcon>
          }
          text1="Địa chỉ:"
          text2={item.detailsPartner?.address}
        />
        <Image
          src={item.detailsPartner?.image}
          alt={item.name}
          w="100%"
          // h={80}
          fit="cover"
          radius={"md"}
        />
        <Text size="md" c={"dimmed"} ta={"center"}>
          {item.detailsPartner?.description}
        </Text>
      </Stack>
    </>
  );
}
