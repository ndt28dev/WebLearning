import { Box, Container, Flex, Image, Overlay, Text } from "@mantine/core";
import MyBreadcrumbs from "../mybreadcrumbs/MyBreadcrumbs";
interface Breadcrumbs {
  title: string;
  href: string;
}

interface HeaderProps {
  title: string;
  items: Breadcrumbs[];
}

interface MyLayoutUserProps {
  children: React.ReactNode;
  image?: string;
  status?: boolean;
  bg?: string;
  header: HeaderProps;
}

export default function MyLayoutUser({
  children,
  image,
  status = false,
  bg,
  header,
}: MyLayoutUserProps) {
  return (
    <>
      <Box mt={66} pos={"relative"}>
        <Box pos={"relative"}>
          {status ? (
            <Box h={300} bg={bg}></Box>
          ) : (
            <>
              <Image src={image} w={"100%"} h={300} fit="cover" />
              <Overlay opacity={0.5} color="black" zIndex={1} />
            </>
          )}
          <Flex
            align={"center"}
            justify={"center"}
            direction="column"
            gap={10}
            pos={"absolute"}
            top={0}
            left={0}
            right={0}
            bottom={0}
            style={{ zIndex: 2 }}
          >
            <Text
              fz={50}
              fw={700}
              c={"white"}
              style={{ textTransform: "capitalize" }}
            >
              {header.title}
            </Text>
            <MyBreadcrumbs items={header.items} />
          </Flex>
        </Box>
        {children}
      </Box>
    </>
  );
}
