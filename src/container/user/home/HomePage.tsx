import { Box } from "@mantine/core";
import BannerHome from "./BannerHome";
import Privilege from "./contai/Privilege";
import FeatureSectionHome from "./FeatureSectionHome";
import PartnerHome from "./PartnerHome";
import PrivilegeHome from "./PrivilegeHome";
import StudentResultsHome from "./StudentResultsHome";
import TeamTeacherHome from "./TeamTeacherHome";
import TrainingProgramHome from "./TrainingProgramHome";
import NewsAndEventsHome from "./NewsAndEventsHome";
import StudentReviewsHome from "./StudentReviewsHome";
import ScheduleConsultationHome from "./ScheduleConsultationHome";
import MyButtonScroll from "@/components/mybutton/MyButtonScroll";

export default function HomePage() {
  return (
    <Box mt={66}>
      <BannerHome />
      <FeatureSectionHome />
      <TrainingProgramHome />
      <TeamTeacherHome />
      <PrivilegeHome />
      <StudentResultsHome />
      <PartnerHome />
      <NewsAndEventsHome />
      <StudentReviewsHome />
      <ScheduleConsultationHome />
    </Box>
  );
}
