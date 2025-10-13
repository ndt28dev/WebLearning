import MyLayoutUserBox from "@/components/client/mylayoutuser/MyLayoutUserBox";
import { Container, Flex } from "@mantine/core";
import { IconHome } from "@tabler/icons-react";
import MyBreadcrumbs from "@/components/client/mybreadcrumbs/MyBreadcrumbs";
import { headerTeachersData } from "@/modules/data/DataHeader";
import TeachersIntroduce from "./TeachersIntroduce";
import TeachersList from "./TeachersList";
import { ITeacherHeader } from "@/modules/interface/ITeacherData";
import { teachersData } from "@/modules/data/DataTeachers";
import TeacherAdvisor from "./TeacherAdvisor";
import TeachersInteract from "./TeachersInteract";
import StudentResultsHome from "../home/StudentResultsHome";
import StudentReviewsHome from "../home/StudentReviewsHome";
import ScheduleConsultationHome from "../home/ScheduleConsultationHome";
import PrivilegeHome from "../home/PrivilegeHome";
import ContactFacebookHome from "../home/ContactFacebookHome";
import TrainingProgramHome from "../home/TrainingProgramHome";

export default function TeachersPage() {
  const data: ITeacherHeader = teachersData.teachersHeader || {};

  return (
    <MyLayoutUserBox
      image={data.image}
      topic={data.topic!}
      description={data.description!}
      color="white"
      colorText="white"
    >
      <Container size={"xl"} p={20}>
        <Flex align={"center"} gap={5}>
          <IconHome size={25} color="var(--mantine-color-brand-5)" />
          <MyBreadcrumbs
            items={headerTeachersData.items}
            c="var(--mantine-color-brand-5)"
            c1="black"
          />
        </Flex>
      </Container>
      <TeachersIntroduce />
      <TeachersList />
      <TeacherAdvisor />
      <TeachersInteract />
      <TrainingProgramHome />
      <PrivilegeHome />
      <StudentResultsHome />
      <StudentReviewsHome />
      <ContactFacebookHome />
      <ScheduleConsultationHome />
    </MyLayoutUserBox>
  );
}
