"use server";

import { request } from "@/lib/request";
import logger from "@/lib/logger";
import { errorFormat } from "@/lib/error";
import {
  NewsPostDTO,
  NewsResponseDTO,
  NewsUpdatePinDTO,
} from "@/types/dto/news";

export async function updatePinNews(
  id: string,
  data: NewsUpdatePinDTO,
): Promise<NewsResponseDTO | null> {
  try {
    const response = await request<NewsResponseDTO>(`/news/${id}`, {
      method: "PUT",
      body: JSON.stringify(data),
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

export async function createNewsService(data: NewsPostDTO) {
  // : Promise<NewsResponseDTO | null>
  try {
    console.log(data);
    const formData = new FormData();
    formData.append("title", data.title);
    formData.append("content", data.content);
    formData.append("categoryId", data.categoryId);
    formData.append("pin", String(data.pin));
    formData.append("userId", data.userId);

    if (data.image instanceof File) {
      formData.append("image", data.image);
    }

    const response = await request<NewsResponseDTO>(`/news`, {
      method: "POST",
      body: formData,
    });

    return response;
  } catch (error: any) {
    // logger.error(errorFormat(error));
    console.dir(error.data, { depth: null });
    return null;
  }
}
