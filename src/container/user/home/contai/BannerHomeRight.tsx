import { homeMockData } from "@/modules/data/DataHome";
import { IBannerHome } from "@/modules/interface/IHome";
import { Flex, Image } from "@mantine/core";

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
        <Image src={data.images[0]} className="bannerHome-right-img1" />
        <Image src={data.images[1]} className="bannerHome-right-img2" />
      </Flex>
      <Flex
        direction={"column"}
        justify={"space-between"}
        flex={1}
        h={"100%"}
        gap="sm"
      >
        <Image src={data.images[2]} className="bannerHome-right-img3" />
        <Image src={data.images[3]} className="bannerHome-right-img4" />
      </Flex>
    </Flex>
  );
}
