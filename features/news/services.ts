"use server";

import { request } from "@/lib/request";
import logger from "@/lib/logger";
import { errorFormat } from "@/lib/error";
import {
  NewsItemDTO,
  NewsPaginateDTO,
  NewsResponseDTO,
  NewsItem,
} from "@/types/dto/news";
import { NewsCategoryDTO } from "@/types/dto/news-category";
import { slugify } from "@/lib/news-utils";

export async function getNewsWithLimitService(
  limit: number,
): Promise<NewsResponseDTO | null> {
  try {
    const safeLimit = Math.min(Math.max(Number(limit) || 8, 1), 30);

    const response = await request<NewsResponseDTO>(
      `/news/limit/?limit=${safeLimit}`,
      {
        next: {
          revalidate: 3600,
          tags: ["news"],
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
    const safePage = Math.max(Number(page) || 1, 1);

    const response = await request<NewsPaginateDTO>(
      `/news/paginate/?page=${safePage}`,
      {
        next: {
          revalidate: 3600,
          tags: ["news"],
        },
      },
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
        tags: [`news:${id}`],
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
      next: {
        revalidate: 3600,
        tags: ["news-categories"],
      },
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
        tags: [`news-category:${id}`],
      },
    });

    return response;
  } catch (error: unknown) {
    logger.error(errorFormat(error));
    return null;
  }
}

export async function getNewsCategoryBySlugService(
  slug: string,
): Promise<NewsCategoryDTO | null> {
  const categories = await getAllNewsCategoryService();

  return (
    categories?.find((category) => slugify(category.category) === slug) ??
    null
  );
}

export async function searchNewsService(
  query: string,
  limit = 10,
): Promise<NewsResponseDTO | null> {
  try {
    const q = query.trim();

    if (q.length < 2) {
      return { data: [] };
    }

    const safeLimit = Math.min(Math.max(Number(limit) || 10, 1), 20);

    const response = await request<NewsResponseDTO>(
      `/news/search/?q=${encodeURIComponent(q)}&limit=${safeLimit}`,
      {
        cache: "no-store",
      },
    );

    return response;
  } catch (error: unknown) {
    logger.error(errorFormat(error));
    return null;
  }
}

export async function getAllNewsForSeoService(
  maxPages = 10,
): Promise<NewsItem[]> {
  const firstPage = await getNewsWithPaginate(1);

  if (!firstPage) return [];

  const items = [...firstPage.data];
  const lastPage = Math.min(firstPage.metadata.lastPage, maxPages);

  for (let page = 2; page <= lastPage; page += 1) {
    const response = await getNewsWithPaginate(page);
    if (response?.data?.length) {
      items.push(...response.data);
    }
  }

  return items;
}