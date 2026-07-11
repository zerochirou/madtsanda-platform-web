import z from "zod";
import { NewsCategoryDTO } from "./news-category";
import { UserDTO } from "./user";
import { NEWS_IMAGE_MAX_SIZE_BYTES, NEWS_IMAGE_MAX_SIZE_LABEL } from "@/lib/upload";

const ACCEPTED_IMAGE_TYPES = ["image/jpeg", "image/jpg", "image/png"];

function getFirstImageFile(files: unknown): File | null {
  if (!files) return null;
  if (files instanceof File) return files;
  const list = files as File[] | FileList;
  return list?.[0] ?? null;
}

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
      return Boolean(getFirstImageFile(files));
    }, "Avatar harus diunggah.")
    .refine((files) => {
      const file = getFirstImageFile(files);
      return file ? file.size <= NEWS_IMAGE_MAX_SIZE_BYTES : false;
    }, `Ukuran maksimal adalah ${NEWS_IMAGE_MAX_SIZE_LABEL}.`)
    .refine((files) => {
      const file = getFirstImageFile(files);
      return file ? ACCEPTED_IMAGE_TYPES.includes(file.type) : false;
    }, "Hanya format .jpg, .jpeg, dan .png yang didukung."),
  categoryId: z.uuid(),
});
export const NewsUpdateSchema = z.object({
  title: z.string(),
  content: z.string(),
  pin: z.boolean(),
  image: z
    .unknown()
    .refine((files) => {
      return files === null || files === undefined || Boolean(getFirstImageFile(files));
    }, "Avatar harus diunggah.")
    .refine((files) => {
      const file = getFirstImageFile(files);
      return !file || file.size <= NEWS_IMAGE_MAX_SIZE_BYTES;
    }, `Ukuran maksimal adalah ${NEWS_IMAGE_MAX_SIZE_LABEL}.`)
    .refine((files) => {
      const file = getFirstImageFile(files);
      return !file || ACCEPTED_IMAGE_TYPES.includes(file.type);
    }, "Hanya format .jpg, .jpeg, dan .png yang didukung.")
    .nullable(),
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

export interface NewsPinUpdateDTO {
  pin: boolean;
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
