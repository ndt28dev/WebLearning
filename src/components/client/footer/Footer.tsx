"use client";
import {
  IconBrandFacebook,
  IconBrandInstagram,
  IconBrandLinkedin,
  IconBrandTiktok,
  IconBrandTwitter,
  IconBrandYoutube,
  IconLocation,
  IconMap2,
  IconMapPin,
  IconPhoneCall,
} from "@tabler/icons-react";
import {
  ActionIcon,
  Container,
  Flex,
  Group,
  Image,
  Stack,
  Text,
} from "@mantine/core";
import classes from "@/styles/client/FooterLinks.module.css";
import { dataMockFooter, IMenuFooter } from "@/modules/data/MenuFooter";

export default function Footer() {
  const data: IMenuFooter = dataMockFooter;

  const groups = data.menuFooterList.map((group) => {
    const links = group.links.map((link, index) => (
      <Text<"a">
        key={index}
        className={classes.link}
        component="a"
        href={link.link}
        c={"white"}
        fz={"md"}
        onClick={(event) => event.preventDefault()}
      >
        {link.label}
      </Text>
    ));

    return (
      <div className={classes.wrapper} key={group.title}>
        <Text className={classes.title} c={"white"}>
          {group.title}{" "}
        </Text>
        {links}
      </div>
    );
  });

  return (
    <footer className={classes.footer}>
      <Container size={"lg"} className={classes.inner}>
        <div className={classes.logo}>
          <Flex align={"center"}>
            <Image w={100} h={100} src={data.menuFooterInfo.image} alt="logo" />
            <Text mt={0} size="sm" c="white" fz={"md"}>
              {data.menuFooterInfo.description}
            </Text>
          </Flex>
          {/* <Image
            w={172}
            h={65}
            fit="cover"
            src={data.menuFooterInfo.imageNotification}
            alt="logo"
            radius={"md"}
          /> */}
          {(data.menuFooterInfo?.phone?.length ?? 0) > 0 && (
            <Group gap={10} align="center" mb={5}>
              <IconPhoneCall size={18} stroke={1.5} color="white" />

              <Stack gap={0}>
                {data.menuFooterInfo.phone?.map((item, index) => (
                  <Text key={index} c="white" fz={"md"} fw={700}>
                    {item}
                  </Text>
                ))}
              </Stack>
            </Group>
          )}
          {data.menuFooterInfo.location?.map((item, index) => (
            <Group
              gap={10}
              align="center"
              key={index}
              mb={
                index === (data.menuFooterInfo.location?.length ?? 0) - 1
                  ? 0
                  : 5
              }
            >
              <IconMapPin size={18} stroke={1.5} color="white" />

              <Text c="white" fz={"md"} fw={700} flex={1}>
                {item}
              </Text>
            </Group>
          ))}
          <Group
            gap={5}
            className={classes.social}
            justify="flex-start"
            wrap="nowrap"
            mt={"xs"}
          >
            {data.menuFooterInfo.facebook && (
              <ActionIcon<"a">
                component="a"
                href={data.menuFooterInfo?.facebook || "#"}
                target="_blank"
                rel="noopener noreferrer"
                size="lg"
                color="white"
                variant="subtle"
                aria-label="Facebook"
              >
                <IconBrandFacebook size={25} stroke={1.2} />
              </ActionIcon>
            )}
            {data.menuFooterInfo.intagram && (
              <ActionIcon<"a">
                component="a"
                href={data.menuFooterInfo?.intagram || "#"}
                target="_blank"
                rel="noopener noreferrer"
                size="lg"
                color="white"
                variant="subtle"
                aria-label="instagram"
              >
                <IconBrandInstagram size={25} stroke={1.2} />
              </ActionIcon>
            )}
            {data.menuFooterInfo.tiktok && (
              <ActionIcon<"a">
                component="a"
                href={data.menuFooterInfo?.tiktok || "#"}
                target="_blank"
                rel="noopener noreferrer"
                size="lg"
                color="white"
                variant="subtle"
                aria-label="tiktok"
              >
                <IconBrandTiktok size={25} stroke={1.2} />
              </ActionIcon>
            )}
            {data.menuFooterInfo.youtube && (
              <ActionIcon<"a">
                component="a"
                href={data.menuFooterInfo?.youtube || "#"}
                target="_blank"
                rel="noopener noreferrer"
                size="lg"
                color="white"
                variant="subtle"
                aria-label="youtube"
              >
                <IconBrandYoutube size={25} stroke={1.2} />
              </ActionIcon>
            )}
            {data.menuFooterInfo.linkedin && (
              <ActionIcon<"a">
                component="a"
                href={data.menuFooterInfo?.linkedin || "#"}
                target="_blank"
                rel="noopener noreferrer"
                size="lg"
                color="white"
                variant="subtle"
                aria-label="linkedin"
              >
                <IconBrandLinkedin size={25} stroke={1.2} />
              </ActionIcon>
            )}
            {data.menuFooterInfo.twitter && (
              <ActionIcon<"a">
                component="a"
                href={data.menuFooterInfo?.twitter || "#"}
                target="_blank"
                rel="noopener noreferrer"
                size="lg"
                color="white"
                variant="subtle"
                aria-label="twitter"
              >
                <IconBrandTwitter size={25} stroke={1.2} />
              </ActionIcon>
            )}
          </Group>
        </div>
        <div className={classes.groups}>{groups}</div>
      </Container>
      <Container size={"lg"} className={classes.afterFooter} pt={5} pb={5}>
        <Text w={"100%"} ta={"center"} c="white" size="sm">
          © Design T-Learning by Ndt28dev 2025
        </Text>
      </Container>
    </footer>
  );
}
