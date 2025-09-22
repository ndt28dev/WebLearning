export interface IButton {
  label: string;
  link: string;
  color?: string;
  size?: string;
  radius?: string;
  variant?:
    | "default"
    | "filled"
    | "outline"
    | "light"
    | "subtle"
    | "transparent"
    | "white";
  icon?: React.ReactNode;
  icon1?: React.ReactNode;
}
