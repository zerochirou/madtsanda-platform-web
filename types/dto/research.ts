import z from "zod";
import { UserDTO } from "./user";

const MAX_FILE_SIZE = 50 * 1024 * 1024; // 50MB
const ACCEPTED_MIME_TYPES = [
  "application/pdf",
  "application/msword",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
];

export const ResearchTagSchema = z.object({
  category: z.string().min(1, "Nama tag minimal 1 karakter"),
});

export const ResearchCreateSchema = z.object({
  title: z.string().min(3, "Judul minimal 3 karakter"),
  abstrack: z.string().min(10, "Abstrak minimal 10 karakter"),
  published_date: z.date(),
  researchTagId: z.string(),
  document: z
    .custom<FileList>()
    .refine((files) => files?.length === 1, "Paper harus diunggah.")
    .refine(
      (files) => files?.[0]?.size <= MAX_FILE_SIZE,
      "Ukuran maksimal adalah 50MB.",
    )
    .refine(
      (files) => ACCEPTED_MIME_TYPES.includes(files?.[0]?.type),
      "Hanya format PDF, DOC, dan DOCX yang didukung.",
    ),
});

export interface ResearchTagDTO {
  id: string;
  category: string;
  createdAt: string;
  updatedAt: string;
}

export interface ResearchTagResponseDTO {
  data: ResearchTagDTO[];
}

export interface ResearchPostDTO {
  title: string;
  abstrack: string;
  document: File | null;
  published_date: Date;
  status: string;
  user_id: string;
  researchTagId: string;
}

export interface ResearchItem {
  id: string;
  title: string;
  abstrack: string;
  createdAt: string;
  documentUrl: string | null;
  documentKey: string | null;
  status: "pending" | "has_done";
  researchTag: ResearchTagDTO;
  updatedAt: string;
  user: UserDTO;
}

export interface ResearchStatusUpdateDTO {
  status: "pending" | "has_done";
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
