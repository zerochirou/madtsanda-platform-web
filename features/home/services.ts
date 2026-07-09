"use server";

import { request } from "@/lib/request";
import logger from "@/lib/logger";
import { errorFormat } from "@/lib/error";
import type { NewsResponseDTO } from "@/types/dto/news";
import type { ResearchPaginateDTO } from "@/types/dto/research";

export async function getNewsWithLimitService(
  limit: number,
): Promise<NewsResponseDTO | null> {
  try {
    const response = await request<NewsResponseDTO>(`/news/limit/?limit=${limit}`, {
      next: {
        revalidate: 3600,
        tags: ["news"],
      },
    });

    return response;
  } catch (error: unknown) {
    logger.error(errorFormat(error));
    return null;
  }
}

export async function getLatestResearchService(
  page: number,
): Promise<ResearchPaginateDTO | null> {
  try {
    const response = await request<ResearchPaginateDTO>(
      `/research/paginate/?page=${page}`,
      {
        next: {
          revalidate: 3600,
          tags: ["research"],
        },
      },
    );

    return response;
  } catch (error: unknown) {
    logger.error(errorFormat(error));
    return null;
  }
}
