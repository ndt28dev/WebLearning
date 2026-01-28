import { Fieldset, Flex, Text } from "@mantine/core";

type Props = {
  title: string;
  children: React.ReactNode;
};

export default function MyFieldset({ title, children }: Props) {
  return (
    <Fieldset
      legend={
        <Text
          size="md"
          style={{
            fontWeight: 600,
            borderLeft: "5px solid var(--mantine-color-brand-5)",
          }}
          bg={"var(--mantine-color-brand-1)"}
          c={"var(--mantine-color-brand-5)"}
          pl={10}
          pr={10}
        >
          {title}
        </Text>
      }
    >
      {children}
    </Fieldset>
  );
}
