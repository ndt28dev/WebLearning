import MyLayoutUserBox from "@/components/client/mylayoutuser/MyLayoutUserBox";
import { Container, Flex } from "@mantine/core";
import { IconHome } from "@tabler/icons-react";
import MyBreadcrumbs from "@/components/client/mybreadcrumbs/MyBreadcrumbs";
import { headerPartnerData } from "@/modules/data/DataHeader";
import PartnerList from "./PartnerList";
import { IPartnerHeader } from "@/modules/interface/IPartnerData";
import { partnerData } from "@/modules/data/DataPartner";
import NewsAndEventsHome from "../home/NewsAndEventsHome";
import ScheduleConsultationHome from "../home/ScheduleConsultationHome";

export default function PartnerPage() {
  const data: IPartnerHeader = partnerData.partnerHeader || {};
  return (
    <MyLayoutUserBox
      image={data.image}
      topic={data.topic!}
      description={data.description!}
      colorText="white"
      color="white"
    >
      <Container size={"xl"} p={20}>
        <Flex align={"center"} gap={5}>
          <IconHome size={25} color="var(--mantine-color-brand-5)" />
          <MyBreadcrumbs
            items={headerPartnerData.items}
            c="var(--mantine-color-brand-5)"
            c1="black"
          />
        </Flex>
      </Container>
      <PartnerList />
      <NewsAndEventsHome />
      <ScheduleConsultationHome />
    </MyLayoutUserBox>
  );
}
