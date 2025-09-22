import { Box, Container, Flex, Image, Overlay, Text } from "@mantine/core";
import MyBreadcrumbs from "../mybreadcrumbs/MyBreadcrumbs";

interface MyLayoutUserProps {
  children: React.ReactNode;
  image?: string;
  status?: boolean;
  bg?: string;
}

export default function MyLayoutUser({ children, image, status = false, bg }: MyLayoutUserProps) {
  return (
    <>
      <Box mt={66} pos={"relative"} h={1000}>
        <Box pos={"relative"}>
          {
            status ? (
              <Box h={300} bg={bg}></Box>
            ) : (
              <>
                <Image src="/images/course/anh1.jpg" w={"100%"} h={300} fit="cover" />
                <Overlay opacity={0.5} color="black" zIndex={1} />
              </>
            )
          }
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
              Kèm 1v1 cùng gia sư
            </Text>
            <MyBreadcrumbs
              items={[
                {
                  title: "Trang chủ",
                  href: "/",
                },
                {
                  title: "Kèm 1v1 cùng gia sư",
                  href: "/course-1v1",
                },
              ]}
            />
          </Flex>
        </Box>
        <Container pt={50} pb={50} size={"lg"}>
          {children}
        </Container>
      </Box>
    </>
  );
}
