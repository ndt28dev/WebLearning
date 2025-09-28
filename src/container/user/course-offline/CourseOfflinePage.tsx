import MyLayoutUser from "@/components/client/mylayoutuser/MyLayoutUser";
import CourseOffline from "./CourseOffline";
import { headerCourseOfflineData } from "@/modules/data/DataHeader";
import PrivilegeHome from "../home/PrivilegeHome";
import StudentResultsHome from "../home/StudentResultsHome";
import StudentReviewsHome from "../home/StudentReviewsHome";
import ScheduleConsultationHome from "../home/ScheduleConsultationHome";
import CourseRelatedOnlinePage from "../course-online/CourseRelatedOnlinePage";
import CourseRelated1v1Page from "../course-1v1/CourseRelated1v1Page";

export default function CourseOfflinePage() {
  return (
    <MyLayoutUser
      image="/images/course/anh6.jpg"
      header={headerCourseOfflineData}
    >
      <CourseOffline />
      <CourseRelated1v1Page />
      <CourseRelatedOnlinePage />
      <PrivilegeHome />
      <StudentResultsHome />
      <StudentReviewsHome />
      <ScheduleConsultationHome />
    </MyLayoutUser>
  );
}
