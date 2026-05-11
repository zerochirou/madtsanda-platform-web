/* eslint-disable @typescript-eslint/no-explicit-any */
export function errorFormat(error: unknown): { message: string } {
  if (error instanceof Error) {
    return {
      message: error.message,
      stack: error.stack,
      name: error.name,
      ...((error as any).response?.data && {
        detail: (error as any).response.data,
      }),
    }
  }
  return { message: String(error) }
}