import { Button, Group } from "@mantine/core";
import { IconDownload } from "@tabler/icons-react";
type MyProps = {
  text?: string;
  onClick?: () => void;
  variant?: string;
  color?: string;
  size?: string;
  icon?: React.ReactNode;
};
export default function MyButtonExportAdmin({
  text = "Import",
  onClick,
  variant = "light",
  color = "grape",
  size = "sm",
  icon = <IconDownload size={16} />,
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
