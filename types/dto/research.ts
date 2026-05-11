import z from "zod";
import { UserDTO } from "./user";

const MAX_FILE_SIZE = 50000000; // 50MB

export const ResearchCreateSchema = z.object({
  title: z.string().min(3, "Judul minimal 3 karakter"),
  abstrack: z.string().min(10, "Abstrak minimal 10 karakter"),
  file: z
    .unknown()
    .refine((files) => {
      const list = files as FileList;
      return list && list.length === 1;
    }, "File penelitian harus diunggah.")
    .refine((files) => {
      const list = files as FileList;
      return list && list[0] && list[0].size <= MAX_FILE_SIZE;
    }, "Ukuran file maksimal adalah 50MB."),
});

export interface ResearchItem {
  id: string;
  title: string;
  abstrack: string;
  fileUrl: string | null;
  createdAt: string;
  updatedAt: string;
  user: UserDTO;
}

export interface ResearchPaginateMetadata {
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

export interface ResearchPaginateDTO {
  data: ResearchItem[];
  metadata: ResearchPaginateMetadata;
}

export interface ResearchItemDTO {
  data: ResearchItem;
}
