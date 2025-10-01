export interface IPolicyHeader {
  topic?: string;
  description?: string;
  image?: string;
}

type policyContentType = "policy" | "commit";

export interface IMenuItem {
  id?: number;
  code?: string;
  label?: string;
  items?: IMenuItem[];
}

export interface IPolicyContent {
  type?: policyContentType;
  html?: string;
  menu?: IMenuItem;
}

export interface IPolicyContents {
  day?: Date;
  contents?: IPolicyContent[];
}

export interface IPolicyIntroduce {
  image?: string;
  description?: string[];
}

export interface IPolicyData {
  policyHeader?: IPolicyHeader;
  policyIntroduce?: IPolicyIntroduce;
  policyContents?: IPolicyContents;
}
