import { ThumbnailType } from "../@types/ThumbnailType";

export const getThumbnail = (thumbnail: ThumbnailType): string =>
  `${thumbnail?.path}.${thumbnail?.extension}`;