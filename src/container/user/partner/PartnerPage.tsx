import MyLayoutUserBox from "@/components/client/mylayoutuser/MyLayoutUserBox";
import PartnerHeader from "./PartnerHeader";
import { Container, Flex } from "@mantine/core";
import { IconHome } from "@tabler/icons-react";
import MyBreadcrumbs from "@/components/client/mybreadcrumbs/MyBreadcrumbs";
import { headerPartnerData } from "@/modules/data/DataHeader";
import PartnerList from "./PartnerList";

export default function PartnerPage() {
  return (
    <MyLayoutUserBox>
      <PartnerHeader />
      <Container size={"xl"} p={20}>
        <Flex align={"center"} gap={5}>
          <IconHome size={25} color="var(--mantine-color-brand-5)" />
          <MyBreadcrumbs
            items={headerPartnerData.items}
            c="var(--mantine-color-brand-5)"
          />
        </Flex>
      </Container>
      <PartnerList />
    </MyLayoutUserBox>
  );
}
