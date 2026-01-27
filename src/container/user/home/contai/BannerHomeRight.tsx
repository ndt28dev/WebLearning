import { homeMockData } from "@/modules/data/DataHome";
import { IBannerHome } from "@/modules/interface/IHome";
import { Box, Flex, Image } from "@mantine/core";

export default function BannerHomeRight() {
  const data: IBannerHome = homeMockData.bannerHomeData;
  return (
    <Flex align={"center"} h={520} gap="sm">
      <Flex
        direction={"column"}
        justify={"space-between"}
        flex={1}
        h={"100%"}
        gap="sm"
      >
        <Box h={"40%"}>
          <Image src={data.images[0]} className="bannerHome-right-img1" />
        </Box>
        <Box h={"60%"}>
          <Image src={data.images[1]} className="bannerHome-right-img2" />
        </Box>
      </Flex>
      <Flex
        direction={"column"}
        justify={"space-between"}
        flex={1}
        gap="sm"
        h={"100%"}
      >
        <Box h={"60%"}>
          <Image src={data.images[2]} className="bannerHome-right-img3" />
        </Box>
        <Box h={"40%"}>
          <Image src={data.images[3]} className="bannerHome-right-img4" />
        </Box>
      </Flex>
    </Flex>
  );
}
