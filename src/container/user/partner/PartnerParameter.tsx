import { Box, Container } from "@mantine/core";
import PartnerParameterItem from "./contai/PartnerParameterItem";

export default function PartnerParameter() {
  return (
    <Box pt={20} pb={50}>
      <Container size="xl">
        <PartnerParameterItem />
      </Container>
    </Box>
  );
}
