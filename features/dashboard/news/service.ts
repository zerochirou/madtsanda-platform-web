"use server";

import { request } from "@/lib/request";
import logger from "@/lib/logger";
import { errorFormat } from "@/lib/error";
import {
  NewsPinUpdateDTO,
  NewsPostDTO,
  NewsResponseDTO,
  NewsUpdatePinDTO,
} from "@/types/dto/news";

export async function createNewsService(data: NewsPostDTO) {
  // : Promise<NewsResponseDTO | null>
  try {
    // console.log(data);
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
  // } catch (error: any) {
  } catch (error: unknown) {
    logger.error(errorFormat(error));
    // console.dir(error.data, { depth: null });
    return null;
  }
}


export async function updatePinNews(
  id: string,
  data: NewsUpdatePinDTO,
): Promise<NewsResponseDTO | null> {
  try {
    const response = await request<NewsResponseDTO>(`/news/${id}`, {
      method: "PUT",
      body: JSON.stringify(data),
    });

    return response;
  } catch (error: unknown) {
    logger.error(errorFormat(error));
    return null;
  }
}

export async function updatePinNewsService(id: string, data: NewsPinUpdateDTO): Promise<NewsResponseDTO | null> {
  try {
    const formData = new FormData();
    formData.append("pin", String(data.pin));

    const response = await request<NewsResponseDTO>(`/news/${id}`, {
      method: "PUT",
      body: formData,
    });

    return response;
  // } catch (error: any) {
  } catch (error: unknown) {
    logger.error(errorFormat(error));
    // console.dir(error.data, { depth: null });
    return null;
  }
}

export async function deleteNewsService(id: string): Promise<NewsResponseDTO | null> {
  try {
    const response = await request<NewsResponseDTO>(`/news/${id}`, {
      method: "DELETE",
    });

    return response;
  // } catch (error: any) {
  } catch (error: unknown) {
    logger.error(errorFormat(error));
    // console.dir(error.data, { depth: null });
    return null;
  }
}

export async function updateNewsService(data: Partial<NewsPostDTO>, id: string) {
  try {
    const formData = new FormData();

    // Hanya tambahkan ke FormData jika field tersebut ada/dikirim
    if (data.title) formData.append("title", data.title);
    if (data.content) formData.append("content", data.content);
    if (data.categoryId) formData.append("categoryId", data.categoryId);
    if (data.userId) formData.append("userId", data.userId);
    
    if (data.pin !== undefined) {
      formData.append("pin", String(data.pin));
    }

    if (data.image instanceof File) {
      formData.append("image", data.image);
    }

    const response = await request<NewsResponseDTO>(`/news/${id}`, {
      method: "PUT", 
      body: formData,
    });

    return response;
  } catch (error: unknown) {
  // } catch (error: any) {
    logger.error(errorFormat(error));
    // console.dir(error.data, { depth: null });
    return null;
  }
}