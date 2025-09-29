import { IPartner } from "./IPartner";

export interface IPartnerHeader {
  topic?: string;
  description?: string;
}

export interface IPartnerData {
  partnerHeader?: IPartnerHeader;
  partnerList?: IPartner[];
}
