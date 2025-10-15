import MyBreadcrumbs from "@/components/client/mybreadcrumbs/MyBreadcrumbs";
import MyLayoutBasic from "@/components/client/mylayoutuser/MyLayoutBasic";
import { headerNewsAndEventsData } from "@/modules/data/DataHeader";
import { Container, Flex } from "@mantine/core";
import { IconHome } from "@tabler/icons-react";
import NewsAndEventsHeader from "./NewsAndEventsHeader";
import NewsAndEventsContent from "./NewsAndEventsContent";
import StudentReviewsHome from "../home/StudentReviewsHome";
import ContactFacebookHome from "../home/ContactFacebookHome";
import ScheduleConsultationHome from "../home/ScheduleConsultationHome";
import PartnerHome from "../home/PartnerHome";

export default function NewsAndEventsPage() {
  return (
    <MyLayoutBasic>
      <Container size={"xl"} p={20}>
        <Flex align={"center"} gap={5}>
          <IconHome size={25} color="var(--mantine-color-brand-5)" />
          <MyBreadcrumbs
            items={headerNewsAndEventsData.items}
            c="var(--mantine-color-brand-5)"
            c1="black"
          />
        </Flex>
      </Container>
      <NewsAndEventsHeader />
      <NewsAndEventsContent />
      <PartnerHome />
      <ContactFacebookHome />
      <ScheduleConsultationHome />
    </MyLayoutBasic>
  );
}
