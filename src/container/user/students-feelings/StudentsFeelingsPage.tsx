import MyBreadcrumbs from "@/components/client/mybreadcrumbs/MyBreadcrumbs";
import MyLayoutBasic from "@/components/client/mylayoutuser/MyLayoutBasic";
import { headerStudentsFeelingsData } from "@/modules/data/DataHeader";
import { Container, Flex } from "@mantine/core";
import { IconHome } from "@tabler/icons-react";

export default function StudentsFeelingsPage() {
  return (
    <MyLayoutBasic>
      <Container size={"xl"} p={20}>
        <Flex align={"center"} gap={5}>
          <IconHome size={25} color="var(--mantine-color-brand-5)" />
          <MyBreadcrumbs
            items={headerStudentsFeelingsData.items}
            c="var(--mantine-color-brand-5)"
            c1="black"
          />
        </Flex>
      </Container>
    </MyLayoutBasic>
  );
}
