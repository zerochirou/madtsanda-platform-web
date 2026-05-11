'use server'

import { request } from '@/lib/request'
import logger from '@/lib/logger'
import { errorFormat } from '@/lib/error'
import { NewsResponseDTO } from '@/types/dto/news'

export async function getNewsWithLimitService(limit: number): Promise<NewsResponseDTO | null> {
  try {
    const response = await request<NewsResponseDTO>(`/news/limit/?limit=${limit}`)

    return response
  } catch (error: unknown) {
    logger.error(errorFormat(error))
    return null
  }
}