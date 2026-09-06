"use server";

import { request } from "@/lib/request";
import logger from "@/lib/logger";
import { errorFormat } from "@/lib/error";
import {
  NewsPinUpdateDTO,
  NewsPostDTO,
  NewsResponseDTO,
} from "@/types/dto/news";
import { httpClient } from "@/lib/http/client";

export async function createNewsService(data: NewsPostDTO) {
  try {
    const formData = new FormData();
    formData.append("title", data.title);
    formData.append("content", data.content);
    formData.append("categoryId", data.categoryId);
    formData.append("pin", String(data.pin));
    formData.append("userId", data.userId);

    if (data.image instanceof File) {
      formData.append("image", data.image);
    }

    const result = await httpClient<unknown>("/news", {
      method: "POST",
      body: formData,
    });

    if (!result.ok) {
      return { success: false, message: result.error || "Gagal membuat berita.", data: null };
    }

    return { success: true, message: "Berita berhasil dibuat!", data: result.data };
  } catch (error: unknown) {
    logger.error(errorFormat(error));
    return {
      success: false,
      message: (error as Error)?.message || "Terjadi kesalahan jaringan/server",
      data: null,
    };
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
  } catch (error: unknown) {
    logger.error(errorFormat(error));
    return null;
  }
}

export async function deleteNewsService(id: string): Promise<NewsResponseDTO | null> {
  try {
    const response = await request<NewsResponseDTO>(`/news/${id}`, {
      method: "DELETE",
    });

    return response;
  } catch (error: unknown) {
    logger.error(errorFormat(error));
    return null;
  }
}

export async function updateNewsService(data: Partial<NewsPostDTO>, id: string) {
  try {
    const formData = new FormData();

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

    const result = await httpClient<unknown>(`/news/${id}`, {
      method: "PUT",
      body: formData,
    });

    if (!result.ok) {
      return { success: false, message: result.error || "Gagal menyimpan perubahan.", data: null };
    }

    return { success: true, message: "Perubahan berhasil disimpan!", data: result.data };
  } catch (error: unknown) {
    logger.error(errorFormat(error));
    return {
      success: false,
      message: (error as Error)?.message || "Terjadi kesalahan jaringan/server",
      data: null,
    };
  }
}
