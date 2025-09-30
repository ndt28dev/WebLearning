import { IPartner } from "./IPartner";

export interface IPartnerHeader {
  topic?: string;
  description?: string;
  image?: string;
}

export interface IPartnerData {
  partnerHeader?: IPartnerHeader;
  partnerList?: IPartner[];
}
