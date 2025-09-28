import MyLayoutUser from "@/components/client/mylayoutuser/MyLayoutUser";
import PrivilegeHome from "../home/PrivilegeHome";
import StudentResultsHome from "../home/StudentResultsHome";
import StudentReviewsHome from "../home/StudentReviewsHome";
import ScheduleConsultationHome from "../home/ScheduleConsultationHome";
import CourseOnline from "./CourseOnline";
import { headerCourseOnlineData } from "@/modules/data/DataHeader";
import CourseRelated1v1Page from "../course-1v1/CourseRelated1v1Page";
import CourseRelatedOfflinePage from "../course-offline/CourseRelatedOfflinePage";

export default function CourseOnlinePage() {
  return (
    <MyLayoutUser
      image="/images/course/anh7.jpg"
      header={headerCourseOnlineData}
    >
      <CourseOnline />
      <CourseRelated1v1Page />
      <CourseRelatedOfflinePage />
      <PrivilegeHome />
      <StudentResultsHome />
      <StudentReviewsHome />
      <ScheduleConsultationHome />
    </MyLayoutUser>
  );
}
