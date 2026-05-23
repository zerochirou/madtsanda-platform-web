"use server";

import { request, requestV2 } from "@/lib/request";
import logger from "@/lib/logger";
import { errorFormat } from "@/lib/error";
import { format } from "date-fns";
import type {
  ResearchPostDTO,
  ResearchItemDTO,
  ResearchPaginateDTO,
  ResearchTagResponseDTO,
  ResearchItem,
  ResearchStatusUpdateDTO,
} from "@/types/dto/research";
// Types are imported where needed in function signatures.

export async function createResearchService(
  data: ResearchPostDTO,
): Promise<ResearchItemDTO | null> {
  try {
    const formData = new FormData();

    formData.append("title", data.title);
    formData.append("abstrack", data.abstrack);
    formData.append(
      "published_date",
      format(data.published_date, "yyyy-MM-dd"),
    );
    formData.append("researchTagId", data.researchTagId);
    formData.append("status", data.status);
    formData.append("user_id", data.user_id);

    if (data.document instanceof File) {
      formData.append("document", data.document);
    }

    const response = await requestV2<ResearchItemDTO>(`/research`, {
      method: "POST",
      body: formData,
    });

    return response;
  } catch (error: unknown) {
    // } catch (error: any) {
    logger.error(errorFormat(error));
    // console.dir(error.data, { depth: null });
    throw error;
  }
}

export async function getResearchWithPaginate(): Promise<ResearchPaginateDTO | null> {
  try {
    const response = await request<ResearchPaginateDTO>(`/research`);
    return response;
  } catch (error: unknown) {
    logger.error(errorFormat(error));
    return null;
  }
}

export async function getResearchTag(): Promise<ResearchTagResponseDTO | null> {
  try {
    const response = await request<ResearchTagResponseDTO>(`/research/tag`);
    return response;
  } catch (error: unknown) {
    logger.error(errorFormat(error));
    return null;
  }
}

export async function updateResearchStatus(
  id: string,
  data: ResearchStatusUpdateDTO,
): Promise<ResearchItem | null> {
  try {
    const response = await request<ResearchItem>(`/research/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    return response;
  } catch (error: unknown) {
    logger.error(errorFormat(error));
    return null;
  }
}
