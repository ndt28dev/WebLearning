import {
  Box,
  Center,
  Container,
  Flex,
  Image,
  Overlay,
  Stack,
  Text,
} from "@mantine/core";
import MyTitle from "../mytitle/MyTitle";

type Props = {
  children: React.ReactNode;
  image?: string;
  status?: boolean;
  bg?: string;
  topic: string;
  description: string;
  colorText?: string;
  color?: string;
};
export default function MyLayoutUserBox({
  children,
  image,
  status = false,
  bg,
  topic,
  description,
  colorText,
  color,
}: Props) {
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
            <Container size={"xl"}>
              <MyTitle topic={topic} colorText={colorText} color={color} />
              <Center>
                <Text size="lg" ta={"center"} w={700} c={color}>
                  {description}
                </Text>
              </Center>
            </Container>
          </Flex>
        </Box>
        {children}
      </Box>
    </>
  );
}
