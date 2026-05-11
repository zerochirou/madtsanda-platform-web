export function errorFormat(error: unknown): { message: string; code?: string; detail?: unknown } {
  if (error instanceof Error) {
    return {
      message: error.message,
    };
  }
  
  if (typeof error === 'object' && error !== null) {
    const err = error as Record<string, unknown>;
    return {
      message: typeof err.message === 'string' ? err.message : 'Terjadi kesalahan tidak dikenal.',
      code: typeof err.code === 'string' ? err.code : undefined,
      detail: err.data || err.detail,
    };
  }

  return { message: String(error) };
}