import MyBreadcrumbs from "@/components/client/mybreadcrumbs/MyBreadcrumbs";
import MyLayoutUserBox from "@/components/client/mylayoutuser/MyLayoutUserBox";
import { headerPolicyData } from "@/modules/data/DataHeader";
import { policyData } from "@/modules/data/DataPolicy";
import { IPolicyHeader } from "@/modules/interface/IPolicyData";
import { Container, Flex } from "@mantine/core";
import { IconHome } from "@tabler/icons-react";
import PolicyIntroduce from "./PolicyIntroduce";
import PolicyContent from "./PolicyContent";
import NewsAndEventsHome from "../home/NewsAndEventsHome";
import ScheduleConsultationHome from "../home/ScheduleConsultationHome";
import PrivilegeHome from "../home/PrivilegeHome";
import StudentResultsHome from "../home/StudentResultsHome";
import StudentReviewsHome from "../home/StudentReviewsHome";
import TrainingProgramHome from "../home/TrainingProgramHome";
import ContactFacebookHome from "../home/ContactFacebookHome";

export default function PolicyPage() {
  const data: IPolicyHeader = policyData.policyHeader || {};
  return (
    <MyLayoutUserBox
      status
      bg="#F3F3F5"
      topic={data.topic!}
      description={data.description!}
      color="var(--mantine-color-brand-5)"
      colorText="var(--mantine-color-brand-5)"
    >
      <Container size={"xl"} p={20}>
        <Flex align={"center"} gap={5}>
          <IconHome size={25} color="var(--mantine-color-brand-5)" />
          <MyBreadcrumbs
            items={headerPolicyData.items}
            c="var(--mantine-color-brand-5)"
            c1="black"
          />
        </Flex>
      </Container>
      <PolicyIntroduce />
      <PolicyContent />
      <TrainingProgramHome />
      <PrivilegeHome />
      <StudentResultsHome />
      <StudentReviewsHome />
      <ContactFacebookHome />
      <ScheduleConsultationHome />
    </MyLayoutUserBox>
  );
}
