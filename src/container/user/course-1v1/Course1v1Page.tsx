import MyLayoutUser from "@/components/client/mylayoutuser/MyLayoutUser";
import Course1v1 from "./Course1v1";
import { headerCourse1v1Data } from "@/modules/data/DataHeader";
import PrivilegeHome from "../home/PrivilegeHome";
import StudentResultsHome from "../home/StudentResultsHome";
import StudentReviewsHome from "../home/StudentReviewsHome";
import ScheduleConsultationHome from "../home/ScheduleConsultationHome";
import CourseRelatedOnlinePage from "../course-online/CourseRelatedOnlinePage";
import CourseRelatedOfflinePage from "../course-offline/CourseRelatedOfflinePage";
import ContactFacebookHome from "../home/ContactFacebookHome";

export default function Course1v1Page() {
  return (
    <MyLayoutUser image="/images/course/anh1.jpg" header={headerCourse1v1Data}>
      <Course1v1 />
      <CourseRelatedOfflinePage />
      <CourseRelatedOnlinePage />
      <StudentResultsHome />
      <StudentReviewsHome />
      <ContactFacebookHome />
      <ScheduleConsultationHome />
    </MyLayoutUser>
  );
}
