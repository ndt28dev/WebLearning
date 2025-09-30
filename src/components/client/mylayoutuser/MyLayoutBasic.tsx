import { Box } from "@mantine/core";

type Props = {
  children: React.ReactNode;
};
export default function MyLayoutBasic({ children }: Props) {
  return <Box mt={66}>{children}</Box>;
}
