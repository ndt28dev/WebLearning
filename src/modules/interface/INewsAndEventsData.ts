import { INews, INewsAndEvents } from "./INewsAndEvents";

export interface INewsAndEventsHeader {
  image?: string;
  title?: string;
  description?: string;
}

export interface INewsAndEventsData {
  newsAndEventsHeader?: INewsAndEventsHeader[];
  newsList?: INews[];
  eventsList?: INews[];
}
