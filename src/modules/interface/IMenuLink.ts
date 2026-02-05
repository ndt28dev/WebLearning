export interface IMenuLink {
  label: string;
  link?: string;
  links?: IMenuLink[];
}

export interface IMenuSelected {
  childLabel: string;
  parentLabel: string;
}
