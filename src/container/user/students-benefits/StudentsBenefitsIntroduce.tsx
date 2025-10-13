import { Box, Container } from "@mantine/core";
import BenefitsIntroduceItem from "./contai/BenefitsIntroduceItem";

export default function StudentsBenefitsIntroduce() {
  return (
    <Box pt={20} pb={50}>
      <Container size={"xl"}>
        <BenefitsIntroduceItem />
      </Container>
    </Box>
  );
}
