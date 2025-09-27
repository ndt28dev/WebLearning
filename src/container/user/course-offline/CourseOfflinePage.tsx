import MyLayoutUser from "@/components/client/mylayoutuser/MyLayoutUser";
import CourseOffline from "./CourseOffline";
import { headerCourseOfflineData } from "@/modules/data/DataHeader";
import PrivilegeHome from "../home/PrivilegeHome";
import StudentResultsHome from "../home/StudentResultsHome";
import StudentReviewsHome from "../home/StudentReviewsHome";
import ScheduleConsultationHome from "../home/ScheduleConsultationHome";

export default function CourseOfflinePage() {
  return (
    <MyLayoutUser
      image="/images/course/anh6.jpg"
      header={headerCourseOfflineData}
    >
      <CourseOffline />
      <PrivilegeHome />
      <StudentResultsHome />
      <StudentReviewsHome />
      <ScheduleConsultationHome />
    </MyLayoutUser>
  );
}
