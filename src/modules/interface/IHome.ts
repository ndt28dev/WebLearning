import { IButton } from "./IButton";
import { ICourse } from "./ICourse";
import { ICourseOffline } from "./ICourseOffline";
import { INewsAndEvents } from "./INewsAndEvents";
import { IStudentReviews } from "./IParentReviews";
import { IPartner } from "./IPartner";
import { IPrivilege } from "./IPrivilege";
import { IStudentResults } from "./IStudentResults";
import { ITutor } from "./ITuTor";

export interface IBannerHome {
  title: string;
  highlights?: string[];
  listInfo: string[];
  buttonList: IButton[];
  images: string[];
  imageStudent: string;
  numStudent: number;
  partner: string[];
}

export interface IFeatureBoxHome {
  title: string;
  description: string;
}

export interface IIntroduceHome {
  topic: string;
  title: string;
  highlights: string[];
  description: string[];
  images: string[];
}

export interface ITrainingProgramHome {
  topic: string;
  trainingPrograms: ICourseOffline[];
}

export interface ITuTorHome {
  topic: string;
  tutors: ITutor[];
}

export interface IPrivilegeHome {
  topic: string;
  privileges: IPrivilege[];
}

export interface IStudentResultsHome {
  topic: string;
  studentResults: IStudentResults[];
}

export interface IPartnerHome {
  topic: string;
  partners: IPartner[];
}

export interface INewsAndEventsHome {
  topic: string;
  newsAndEvents: INewsAndEvents[];
}

export interface IParentReviewsHome {
  topic: string;
  studentReviews: IStudentReviews[];
}

export interface IScheduleConsultationHome {
  topic: string;
  title: string;
  description: string;
  morning: string[];
  afternoon: string[];
  evening: string[];
  image: string;
}

export interface IHome {
  bannerHomeData: IBannerHome;
  featureBoxData: IFeatureBoxHome[];
  trainingProgramData: ITrainingProgramHome;
  introduceData: IIntroduceHome;
  tutorData: ITuTorHome;
  privilegeData: IPrivilegeHome;
  studentResultsData: IStudentResultsHome;
  partnerData: IPartnerHome;
  newsAndEventsData: INewsAndEventsHome;
  parentReviewsData: IParentReviewsHome;
  scheduleConsultationData: IScheduleConsultationHome;
}
