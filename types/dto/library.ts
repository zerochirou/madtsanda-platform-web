import z from "zod";

export const LibraryCreateSchema = z.object({
  title: z.string().min(2, "Judul minimal 2 karakter"),
  author: z.string().min(2, "Penulis minimal 2 karakter"),
  category: z.string().min(2, "Kategori minimal 2 karakter"),
  year: z.coerce.number().int().min(1900).max(2100),
  available: z.boolean(),
  description: z.string().optional(),
});

export interface LibraryItem {
  id: string;
  title: string;
  author: string;
  category: string;
  year: number;
  available: boolean;
  description: string | null;
  createdAt: string;
  updatedAt: string;
}

export interface LibraryPostDTO {
  title: string;
  author: string;
  category: string;
  year: number;
  available: boolean;
  description?: string;
}

export interface LibraryResponseDTO {
  data: LibraryItem[];
}

export interface LibraryItemDTO {
  data: LibraryItem;
}
