import MyBreadcrumbs from "@/components/client/mybreadcrumbs/MyBreadcrumbs";
import MyLayoutBasic from "@/components/client/mylayoutuser/MyLayoutBasic";
import { headerOpeningScheduleData } from "@/modules/data/DataHeader";
import { Container, Flex } from "@mantine/core";
import { IconHome } from "@tabler/icons-react";
import OpeningScheduleHeader from "./OpeningScheduleHeader";
import OpeningScheduleList from "./OpeningScheduleList";
import OpeningSchedulePresent from "./OpeningSchedulePresent";
import TeamTeacherHome from "../home/TeamTeacherHome";
import PrivilegeHome from "../home/PrivilegeHome";
import StudentResultsHome from "../home/StudentResultsHome";
import StudentReviewsHome from "../home/StudentReviewsHome";
import ScheduleConsultationHome from "../home/ScheduleConsultationHome";
import ContactFacebookHome from "../home/ContactFacebookHome";
import OpeningScheduleContact from "./OpeningScheduleContact";

export default function OpeningSchedulePage() {
  return (
    <MyLayoutBasic>
      <OpeningScheduleHeader />
      <Container size={"xl"} p={20}>
        <Flex align={"center"} gap={5}>
          <IconHome size={25} color="var(--mantine-color-brand-5)" />
          <MyBreadcrumbs
            items={headerOpeningScheduleData.items}
            c="var(--mantine-color-brand-5)"
            c1="black"
          />
        </Flex>
      </Container>
      <OpeningSchedulePresent />
      <OpeningScheduleList />
      <OpeningScheduleContact />
      <TeamTeacherHome />
      <PrivilegeHome />
      <StudentResultsHome />
      <StudentReviewsHome />
      <ContactFacebookHome />
      <ScheduleConsultationHome />
    </MyLayoutBasic>
  );
}
