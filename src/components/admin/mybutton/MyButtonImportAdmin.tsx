import { Button, Group } from "@mantine/core";
import { IconUpload } from "@tabler/icons-react";
type MyProps = {
  text?: string;
  onClick?: () => void;
  variant?: string;
  color?: string;
  size?: string;
  icon?: React.ReactNode;
};

export default function MyButtonImportAdmin({
  text = "Import",
  onClick,
  variant = "light",
  color = "teal",
  size = "sm",
  icon = <IconUpload size={16} />,
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
