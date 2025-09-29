import MyLayoutUserBox from "@/components/client/mylayoutuser/MyLayoutUserBox";
import IntroduceHeader from "./IntroduceHeader";
import IntroduceValue from "./IntroduceValue";
import IntroduceInfo from "./IntroduceInfo";
import MyBreadcrumbs from "@/components/client/mybreadcrumbs/MyBreadcrumbs";
import { headerIntroduceData } from "@/modules/data/DataHeader";
import { Box, Container, Flex } from "@mantine/core";
import { IconHome } from "@tabler/icons-react";
import IntroduceReason from "./IntroduceReason";
import IntroduceHistory from "./IntroduceHistory";

export default function IntroducePage() {
  return (
    <MyLayoutUserBox>
      <IntroduceHeader />
      <Container size={"xl"} p={20}>
        <Flex align={"center"} gap={5}>
          <IconHome size={25} color="var(--mantine-color-brand-5)" />
          <MyBreadcrumbs
            items={headerIntroduceData.items}
            c="var(--mantine-color-brand-5)"
          />
        </Flex>
      </Container>
      <IntroduceInfo />
      <IntroduceValue />
      <IntroduceReason />
      <IntroduceHistory />
    </MyLayoutUserBox>
  );
}
