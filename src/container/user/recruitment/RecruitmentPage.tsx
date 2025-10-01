import MyBreadcrumbs from "@/components/client/mybreadcrumbs/MyBreadcrumbs";
import MyLayoutUserBox from "@/components/client/mylayoutuser/MyLayoutUserBox";
import {
  headerPartnerData,
  headerRecruitmentData,
} from "@/modules/data/DataHeader";
import { recruitmentData } from "@/modules/data/DataRecruitment";
import { IRecruitmentHeader } from "@/modules/interface/IRecruitmentData";
import { Container, Flex } from "@mantine/core";
import { IconHome } from "@tabler/icons-react";
import RecruitmentWelfare from "./RecruitmentWelfare";
import RecruitmentFind from "./RecruitmentFind";
import RecruitmentList from "./RecruitmentList";
import NewsAndEventsHome from "../home/NewsAndEventsHome";
import ScheduleConsultationHome from "../home/ScheduleConsultationHome";
import PartnerHome from "../home/PartnerHome";
import { useScrollIntoView } from "@mantine/hooks";

export default function RecruitmentPage() {
  const data: IRecruitmentHeader = recruitmentData.recruitmentHeader || {};

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
            items={headerRecruitmentData.items}
            c="var(--mantine-color-brand-5)"
            c1="black"
          />
        </Flex>
      </Container>
      <RecruitmentWelfare />
      <RecruitmentFind />
      <RecruitmentList />
      <PartnerHome />
      <NewsAndEventsHome />
      <ScheduleConsultationHome />
    </MyLayoutUserBox>
  );
}
