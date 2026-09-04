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
import { cookies } from "next/headers";

export async function createNewsService(data: NewsPostDTO) {
  try {
    const cookieSession = await cookies();
    const token = cookieSession.get("auth_token")?.value;
    const formData = new FormData();
    formData.append("title", data.title);
    formData.append("content", data.content);
    formData.append("categoryId", data.categoryId);
    formData.append("pin", String(data.pin));
    formData.append("userId", data.userId);

    if (data.image instanceof File) {
      formData.append("image", data.image);
    }

    const apiUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3333/api/v1";
    const response = await fetch(`${apiUrl}/news`, {
      method: "POST",
      body: formData,
      headers: {
        ...(token ? { Authorization: `Bearer ${token}` } : {}),
      },
    });

    const result = await response.json().catch(() => null);

    if (!response.ok) {
      let errorMsg = "Gagal membuat berita.";
      if (result?.errors && Array.isArray(result.errors)) {
        errorMsg = result.errors.map((e: any) => e.message).join(", ");
      } else if (result?.message) {
        errorMsg = result.message;
      }
      return { success: false, message: errorMsg, data: null };
    }

    return { success: true, message: "Berita berhasil dibuat!", data: result?.data };
  } catch (error: unknown) {
    logger.error(errorFormat(error));
    return {
      success: false,
      message: (error as Error)?.message || "Terjadi kesalahan jaringan/server",
      data: null,
    };
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
    const cookieSession = await cookies();
    const token = cookieSession.get("auth_token")?.value;
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

    const apiUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3333/api/v1";
    const response = await fetch(`${apiUrl}/news/${id}`, {
      method: "PUT",
      body: formData,
      headers: {
        ...(token ? { Authorization: `Bearer ${token}` } : {}),
      },
    });

    const result = await response.json().catch(() => null);

    if (!response.ok) {
      let errorMsg = "Gagal menyimpan perubahan.";
      if (result?.errors && Array.isArray(result.errors)) {
        errorMsg = result.errors.map((e: any) => e.message).join(", ");
      } else if (result?.message) {
        errorMsg = result.message;
      }
      return { success: false, message: errorMsg, data: null };
    }

    return { success: true, message: "Perubahan berhasil disimpan!", data: result?.data };
  } catch (error: unknown) {
    logger.error(errorFormat(error));
    return {
      success: false,
      message: (error as Error)?.message || "Terjadi kesalahan jaringan/server",
      data: null,
    };
  }
}
