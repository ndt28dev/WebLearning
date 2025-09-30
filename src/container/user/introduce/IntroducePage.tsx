import MyLayoutUserBox from "@/components/client/mylayoutuser/MyLayoutUserBox";
import IntroduceValue from "./IntroduceValue";
import IntroduceInfo from "./IntroduceInfo";
import MyBreadcrumbs from "@/components/client/mybreadcrumbs/MyBreadcrumbs";
import { headerIntroduceData } from "@/modules/data/DataHeader";
import { Box, Container, Flex } from "@mantine/core";
import { IconHome } from "@tabler/icons-react";
import IntroduceReason from "./IntroduceReason";
import IntroduceHistory from "./IntroduceHistory";
import { IIntroduceHeader } from "@/modules/interface/IIntroduceData";
import { introduceData } from "@/modules/data/DataIntroduce";
import ScheduleConsultationHome from "../home/ScheduleConsultationHome";

export default function IntroducePage() {
  const data: IIntroduceHeader = introduceData.introduceHeader || {};
  return (
    <MyLayoutUserBox
      topic={data.topic!}
      description={data.description!}
      bg="var(--mantine-color-brand-1)"
      status
    >
      <Container size={"xl"} p={20}>
        <Flex align={"center"} gap={5}>
          <IconHome size={25} color="var(--mantine-color-brand-5)" />
          <MyBreadcrumbs
            items={headerIntroduceData.items}
            c="var(--mantine-color-brand-5)"
            c1="black"
          />
        </Flex>
      </Container>
      <IntroduceInfo />
      <IntroduceValue />
      <IntroduceReason />
      <IntroduceHistory />
      <ScheduleConsultationHome />
    </MyLayoutUserBox>
  );
}
