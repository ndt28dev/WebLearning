import MyTitle from "@/components/client/mytitle/MyTitle";
import { partnerData } from "@/modules/data/DataPartner";
import { IPartnerHeader } from "@/modules/interface/IPartnerData";
import { Center, Container, Stack, Text } from "@mantine/core";

export default function PartnerHeader() {
  const data: IPartnerHeader = partnerData.partnerHeader || {};
  return (
    <Stack
      gap={0}
      p={50}
      style={{
        minHeight: 280,
        backgroundImage: "url('/images/partner/imageHeader.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <Container size={"xl"}>
        <MyTitle topic={data.topic!} colorText="white" color="white" />
        <Center>
          <Text size="lg" ta={"center"} c={"white"} w={700}>
            {data.description}
          </Text>
        </Center>
      </Container>
    </Stack>
  );
}
