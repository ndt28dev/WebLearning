import MyLayoutUser from "@/components/client/mylayoutuser/MyLayoutUser";
import CourseOffline from "./CourseOffline";
import { headerCourseOfflineData } from "@/modules/data/DataHeader";

export default function CourseOfflinePage() {
  return (
    <MyLayoutUser
      image="/images/course/anh6.jpg"
      header={headerCourseOfflineData}
    >
      <CourseOffline />
    </MyLayoutUser>
  );
}
