"use server";

import { request } from "@/lib/request";
import logger from "@/lib/logger";
import { errorFormat } from "@/lib/error";
import {
  NewsItemDTO,
  NewsPaginateDTO,
  NewsResponseDTO,
} from "@/types/dto/news";
import { NewsCategoryDTO } from "@/types/dto/news-category";

export async function getNewsWithLimitService(
  limit: number,
): Promise<NewsResponseDTO | null> {
  try {
    const response = await request<NewsResponseDTO>(
      `/news/limit/?limit=${limit}`,
      {
        next: {
          revalidate: 3600,
          tags: ["categories"],
        },
      },
    );

    return response;
  } catch (error: unknown) {
    logger.error(errorFormat(error));
    return null;
  }
}

export async function getNewsWithPaginate(
  page: number,
): Promise<NewsPaginateDTO | null> {
  try {
    const response = await request<NewsPaginateDTO>(
      `/news/paginate/?page=${page} `,
    );

    return response;
  } catch (error: unknown) {
    logger.error(errorFormat(error));
    return null;
  }
}

export async function getNewsByIdService(
  id: string,
): Promise<NewsItemDTO | null> {
  try {
    const response = await request<NewsItemDTO>(`/news/${id}`, {
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

export async function getAllNewsCategoryService(): Promise<
  NewsCategoryDTO[] | null
> {
  try {
    const response = await request<NewsCategoryDTO[]>(`/news/category`, {
    });

    return response;
  } catch (error: unknown) {
    logger.error(errorFormat(error));
    return null;
  }
}

export async function getNewsByCategoryIdService(
  id: string,
): Promise<NewsResponseDTO | null> {
  try {
    const response = await request<NewsResponseDTO>(`/news/${id}/category`, {
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
