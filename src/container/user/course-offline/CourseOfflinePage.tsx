import MyLayoutUser from "@/components/client/mylayoutuser/MyLayoutUser";
import CourseOffline from "./CourseOffline";

export default function CourseOfflinePage() {
  const headerData = {
    title: "Khoá học offline tại lớp",
    items: [
      {
        title: "Trang chủ",
        href: "/",
      },
      {
        title: "Khoá học offline tại lớp",
        href: "/courses-offline",
      },
    ],
  };
  return (
    <MyLayoutUser image="/images/course/anh6.jpg" header={headerData}>
      <CourseOffline />
    </MyLayoutUser>
  );
}
