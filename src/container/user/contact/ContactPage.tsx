import MyBreadcrumbs from "@/components/client/mybreadcrumbs/MyBreadcrumbs";
import MyLayoutBasic from "@/components/client/mylayoutuser/MyLayoutBasic";
import { headerContactData } from "@/modules/data/DataHeader";
import { Container, Flex } from "@mantine/core";
import { IconHome } from "@tabler/icons-react";
import ContactHeader from "./ContactHeader";
import ContactSupport from "./ContactSupport";
import ContactInfo from "./ContactInfo";
import ContactTime from "./ContactTime";
import ScheduleConsultationHome from "../home/ScheduleConsultationHome";
import ContactMap from "./ContactMap";

export default function ContactPage() {
  return (
    <MyLayoutBasic>
      <ContactHeader />
      <Container size={"xl"} p={20}>
        <Flex align={"center"} gap={5}>
          <IconHome size={25} color="var(--mantine-color-brand-5)" />
          <MyBreadcrumbs
            items={headerContactData.items}
            c="var(--mantine-color-brand-5)"
            c1="black"
          />
        </Flex>
      </Container>
      <ContactSupport />
      <ContactInfo />
      <ContactTime />
      <ScheduleConsultationHome status />
      <ContactMap />
    </MyLayoutBasic>
  );
}
