import MyBreadcrumbs from "@/components/client/mybreadcrumbs/MyBreadcrumbs";
import MyLayoutBasic from "@/components/client/mylayoutuser/MyLayoutBasic";
import { headerStudentsBenefitsData } from "@/modules/data/DataHeader";
import { Container, Flex } from "@mantine/core";
import { IconHome } from "@tabler/icons-react";
import StudentsBenefitsIntroduce from "./StudentsBenefitsIntroduce";
import StudentsBenefitsList from "./StudentsBenefitsList";
import StudentResultsHome from "../home/StudentResultsHome";
import StudentReviewsHome from "../home/StudentReviewsHome";
import TrainingProgramHome from "../home/TrainingProgramHome";
import TeamTeacherHome from "../home/TeamTeacherHome";
import NewsAndEventsHome from "../home/NewsAndEventsHome";
import ContactFacebookHome from "../home/ContactFacebookHome";
import ScheduleConsultationHome from "../home/ScheduleConsultationHome";

export default function StudentsBenefitsPage() {
  return (
    <MyLayoutBasic>
      <Container size={"xl"} p={20}>
        <Flex align={"center"} gap={5}>
          <IconHome size={25} color="var(--mantine-color-brand-5)" />
          <MyBreadcrumbs
            items={headerStudentsBenefitsData.items}
            c="var(--mantine-color-brand-5)"
            c1="black"
          />
        </Flex>
      </Container>
      <StudentsBenefitsIntroduce />
      <StudentsBenefitsList />
      <StudentResultsHome />
      <StudentReviewsHome />
      <NewsAndEventsHome />
      <ContactFacebookHome />
      <ScheduleConsultationHome />
    </MyLayoutBasic>
  );
}
