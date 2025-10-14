import { Box, Container } from "@mantine/core";
import Privilege from "./contai/Privilege";

type Props = {
  status?: boolean;
};

export default function PrivilegeHome({ status }: Props) {
  return (
    <Box
      style={{
        backgroundColor: "var(--mantine-color-brand-0)",
      }}
    >
      <Container size={"xl"}>
        <Privilege status={status} />
      </Container>
    </Box>
  );
}
