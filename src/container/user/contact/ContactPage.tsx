import MyBreadcrumbs from "@/components/client/mybreadcrumbs/MyBreadcrumbs";
import MyLayoutBasic from "@/components/client/mylayoutuser/MyLayoutBasic";
import { headerContactData } from "@/modules/data/DataHeader";
import { Container, Flex } from "@mantine/core";
import { IconHome } from "@tabler/icons-react";

export default function ContactPage() {
  return (
    <MyLayoutBasic>
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
    </MyLayoutBasic>
  );
}
