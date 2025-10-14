import MyBreadcrumbs from "@/components/client/mybreadcrumbs/MyBreadcrumbs";
import MyLayoutBasic from "@/components/client/mylayoutuser/MyLayoutBasic";
import { headerStudentsAchievementsData } from "@/modules/data/DataHeader";
import { Container, Flex } from "@mantine/core";
import { IconHome } from "@tabler/icons-react";
import StudentsAchievementsParameter from "./StudentsAchievementsParameter";
import StudentsAchievementsHeader from "./StudentsAchievementsHeader";
import StudentsAchievementsList from "./StudentsAchievementsList";
import CourseRelated1v1Page from "../course-1v1/CourseRelated1v1Page";
import CourseRelatedOfflinePage from "../course-offline/CourseRelatedOfflinePage";
import CourseRelatedOnlinePage from "../course-online/CourseRelatedOnlinePage";
import StudentReviewsHome from "../home/StudentReviewsHome";
import ContactFacebookHome from "../home/ContactFacebookHome";
import ScheduleConsultationHome from "../home/ScheduleConsultationHome";
import OpeningScheduleContact from "../opening-schedule/OpeningScheduleContact";
import StudentsAchievementsContact from "./StudentsAchievementsContact";

export default function StudentsAchievementsPage() {
  return (
    <MyLayoutBasic>
      <StudentsAchievementsHeader />
      <Container size={"xl"} p={20}>
        <Flex align={"center"} gap={5}>
          <IconHome size={25} color="var(--mantine-color-brand-5)" />
          <MyBreadcrumbs
            items={headerStudentsAchievementsData.items}
            c="var(--mantine-color-brand-5)"
            c1="black"
          />
        </Flex>
      </Container>
      <StudentsAchievementsParameter />
      <StudentsAchievementsList />
      <StudentsAchievementsContact />
      <CourseRelated1v1Page />
      <CourseRelatedOfflinePage />
      <CourseRelatedOnlinePage />
      <StudentReviewsHome />
      <ContactFacebookHome />
      <ScheduleConsultationHome />
    </MyLayoutBasic>
  );
}
