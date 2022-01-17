import { ThumbnailType } from "./ThumbnailType";

export type StorieType = {
  title: string;
  description: string;
  thumbnail: ThumbnailType;
  id: number;
  originalIssue: {
    name: string;
  };
};