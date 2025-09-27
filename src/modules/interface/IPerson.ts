interface IPersonSocialLinks {
  facebook?: string;
  zalo?: string;
  youtube?: string;
  tiktok?: string;
  linkedin?: string;
  intagram?: string;
}

export interface IPerson {
  id?: number;
  code?: string;
  name?: string;
  image?: string;
  gender?: boolean;
  phone?: string;
  address?: string;
  email?: string;
  sociaLinks?: IPersonSocialLinks;
}
