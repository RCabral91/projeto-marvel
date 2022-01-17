import { ThumbnailType } from "./ThumbnailType";

export type SerieType = {
  title: string;
  description: string;
  thumbnail: ThumbnailType;
  id: number;
  originalIssue: string;
  name: string;
};