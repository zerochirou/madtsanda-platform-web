"use server";

import { request } from "@/lib/request";
import logger from "@/lib/logger";
import { errorFormat } from "@/lib/error";
import { ResearchItemDTO, ResearchPaginateDTO } from "@/types/dto/research";

export async function createResearchService(data: {
  title: string;
  abstract: string;
  file: File;
  userId: string;
}): Promise<ResearchItemDTO | null> {
  try {
    const formData = new FormData();
    formData.append("title", data.title);
    formData.append("abstrack", data.abstract);
    formData.append("document", data.file);
    formData.append("user_id", data.userId);

    const response = await request<ResearchItemDTO>(`/research`, {
      method: "POST",
      body: formData,
    });

    return response;
  } catch (error: unknown) {
    logger.error(errorFormat(error));
    return null;
  }
}

export async function getResearchWithPaginate(
  page: number,
): Promise<ResearchPaginateDTO | null> {
  try {
    const response = await request<ResearchPaginateDTO>(
      `/research/paginate/?page=${page} `,
    );
    return response;
  } catch (error: unknown) {
    logger.error(errorFormat(error));
    return null;
  }
}
