import { Button, Group } from "@mantine/core";
import { IconPlus } from "@tabler/icons-react";

type MyProps = {
  text?: string;
  onClick?: () => void;
  variant?: string;
  color?: string;
  size?: string;
  icon?: React.ReactNode;
};

export default function MyButtonAddAdmin({
  text = "Thêm",
  onClick,
  variant = "filled",
  color = "blue",
  size = "sm",
  icon = <IconPlus size={16} />,
}: MyProps) {
  return (
    <Button
      leftSection={icon}
      variant={variant}
      color={color}
      size={size}
      onClick={onClick}
    >
      {text}
    </Button>
  );
}
