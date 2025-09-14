export interface IMenuLink {
  label: string;
  link?: string;
  initiallyOpened?: boolean;
  links?: IMenuLink[];
}
