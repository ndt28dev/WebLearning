import { IButton } from "@/modules/interface/IButton";
import { Button } from "@mantine/core";
import { Icon123 } from "@tabler/icons-react";
import { useRouter } from "next/navigation";

interface MyButtonProps extends IButton {
  c?: string;
}

export default function MyButton({
  label,
  link,
  color = "var(--mantine-color-brand-5)",
  size,
  radius,
  variant = "default",
  icon,
  icon1,
  c,
}: MyButtonProps) {
  const router = useRouter();
  return (
    <Button
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
      <span
        style={{
          color: c,
        }}
      >
        {label}
      </span>
    </Button>
  );
}
