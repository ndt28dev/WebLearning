import { IButton } from "@/modules/interface/IButton";
import { Button, Text } from "@mantine/core";
import { Icon123 } from "@tabler/icons-react";
import { useRouter } from "next/navigation";

interface MyButtonProps extends IButton {
  c?: string;
  disabled?: boolean;
}

export default function MyButton({
  label,
  link,
  color = "var(--mantine-color-brand-5)",
  size = "md",
  radius = "sm",
  variant = "default",
  icon,
  icon1,
  c,
  disabled,
}: MyButtonProps) {
  const router = useRouter();
  return (
    <Button
      disabled={disabled}
      color={color}
      size={size}
      radius={radius}
      variant={variant}
      leftSection={icon}
      rightSection={icon1}
      onClick={() => {
        router.push(link);
      }}
    >
      <Text c={c} size={size}>
        {label}
      </Text>
    </Button>
  );
}
