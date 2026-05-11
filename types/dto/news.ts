import z from "zod";
import { NewsCategoryDTO } from "./news-category";
import { UserDTO } from "./user";

const MAX_FILE_SIZE = 5000000 * 10; // 5MB
const ACCEPTED_IMAGE_TYPES = [
  "image/jpeg",
  "image/jpg",
  "image/png",
];

export interface NewsResponseDTO {
  data: NewsItem[];
}

export interface NewsUpdatePinDTO {
  pin: boolean;
}

export const NewsCreateSchema = z.object({
  title: z.string(),
  content: z.string(),
  pin: z.boolean(),
  image: z
    .unknown()
    .refine((files) => {
      const list = files as FileList;
      return list && list.length === 1;
    }, "Avatar harus diunggah.")
    .refine((files) => {
      const list = files as FileList;
      return list && list[0] && list[0].size <= MAX_FILE_SIZE;
    }, "Ukuran maksimal adalah 5MB.")
    .refine((files) => {
      const list = files as FileList;
      return list && list[0] && ACCEPTED_IMAGE_TYPES.includes(list[0].type);
    }, "Hanya format .jpg, .jpeg, dan .png yang didukung."),
  categoryId: z.uuid(),
});

export interface NewsPostDTO {
  title: string;
  content: string;
  pin: boolean;
  image: File | null;
  userId: string;
  categoryId: string;
}

export interface NewsItemDTO {
  data: NewsItem;
}

export interface NewsPaginateDTO {
  data: NewsItem[];
  metadata: NewsPaginateMetadata;
}

export interface NewsPaginateMetadata {
  total: number;
  perPage: number;
  currentPage: number;
  lastPage: number;
  firstPage: number;
  firstPageUrl: string;
  lastPageUrl: string;
  nextPageUrl: null | string;
  previousPageUrl: null;
}

export interface NewsItem {
  id: string;
  title: string;
  content: string;
  pin: number;
  categoryId: string;
  imageUrl: string | null;
  createdAt: string;
  updatedAt: string;
  user: UserDTO;
  newsCategory: NewsCategoryDTO;
}
