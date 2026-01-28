export interface IMenuLink {
  label: string;
  link?: string;
  initiallyOpened?: boolean;
  links?: IMenuLink[];
}

export interface IMenuSelected {
  childLabel: string;
  parentLabel: string;
}
