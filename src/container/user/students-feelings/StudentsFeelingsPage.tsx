import MyBreadcrumbs from "@/components/client/mybreadcrumbs/MyBreadcrumbs";
import MyLayoutBasic from "@/components/client/mylayoutuser/MyLayoutBasic";
import { headerStudentsFeelingsData } from "@/modules/data/DataHeader";
import { Container, Flex } from "@mantine/core";
import { IconHome } from "@tabler/icons-react";
import StudentsFeelingsHeader from "./StudentsFeelingsHeader";
import StudentsFeelingsParameter from "./StudentsFeelingsParameter";
import StudentsFeelingsList from "./StudentsFeelingsList";
import CourseRelated1v1Page from "../course-1v1/CourseRelated1v1Page";
import CourseRelatedOfflinePage from "../course-offline/CourseRelatedOfflinePage";
import CourseRelatedOnlinePage from "../course-online/CourseRelatedOnlinePage";
import StudentReviewsHome from "../home/StudentReviewsHome";
import ContactFacebookHome from "../home/ContactFacebookHome";
import ScheduleConsultationHome from "../home/ScheduleConsultationHome";
import OpeningScheduleContact from "../opening-schedule/OpeningScheduleContact";
import StudentsFeelingsContact from "./StudentsFeelingsContact";

export default function StudentsFeelingsPage() {
  return (
    <MyLayoutBasic>
      <StudentsFeelingsHeader />
      <Container size={"xl"} p={20}>
        <Flex align={"center"} gap={5}>
          <IconHome size={25} color="var(--mantine-color-brand-5)" />
          <MyBreadcrumbs
            items={headerStudentsFeelingsData.items}
            c="var(--mantine-color-brand-5)"
            c1="black"
          />
        </Flex>
      </Container>
      <StudentsFeelingsParameter />
      <StudentsFeelingsList />
      <StudentsFeelingsContact />
      <CourseRelated1v1Page />
      <CourseRelatedOfflinePage />
      <CourseRelatedOnlinePage />
      <StudentReviewsHome />
      <ContactFacebookHome />
      <ScheduleConsultationHome />
    </MyLayoutBasic>
  );
}
