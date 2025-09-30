export interface IIntroduceData {
  introduceHeader?: IIntroduceHeader;
  introduceValue?: IIntroduceValue;
  introduceInfo?: IIntroduceInfo;
  introduceReason?: IIntroduceReason;
  introduceHistory?: IIntroduceHistory;
}

export interface IIntroduceHeader {
  topic?: string;
  description?: string;
}

export interface IIntroduceValue {
  heading?: string;
  subheading?: string;
  features?: IIntroduceFeature[];
}

export interface IIntroduceFeature {
  title?: string;
  desc?: string;
}

export interface IIntroduceInfo {
  info?: IIntroduceInfoItem[];
}

export interface IIntroduceInfoItem {
  image?: string; // e.g. "/images/introduce/anh1.webp"
  title?: string;
  description?: string;
}

export interface IIntroduceReason {
  heading?: string;
  reason?: string[]; // list of bullet points
}

export interface IIntroduceHistory {
  topic?: string;
  description?: string;
  history?: IIntroduceHistoryItem[];
}

export interface IIntroduceHistoryItem {
  day?: Date; // hoặc string nếu load từ JSON
  title?: string;
  desc?: string;
}
