interface IPersonSocialLinks {
  facebook?: string;
  zalo?: string;
  youtube?: string;
  tiktok?: string;
  linkedin?: string;
  intagram?: string;
}

export interface IPerson extends IBaseEntity {
  name?: string;
  image?: string;
  gender?: boolean;
  phone?: string;
  address?: string;
  email?: string;
  sociaLinks?: IPersonSocialLinks;
}
