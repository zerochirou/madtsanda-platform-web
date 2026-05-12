"use server";

import { request, requestV2 } from "@/lib/request";
import logger from "@/lib/logger";
import { errorFormat } from "@/lib/error";
import {
  ResearchItemDTO,
  ResearchPaginateDTO,
  ResearchPostDTO,
  ResearchTagResponseDTO,
} from "@/types/dto/research";
import { format } from "date-fns";

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

export async function getResearchTag(): Promise<ResearchTagResponseDTO | null> {
  try {
    const response = await request<ResearchTagResponseDTO>(`/research/tag`);
    return response;
  } catch (error: unknown) {
    logger.error(errorFormat(error));
    return null;
  }
}
