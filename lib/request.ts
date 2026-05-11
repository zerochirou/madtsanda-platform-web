// libs/api.ts

const BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3333/api/v1';

type RequestOptions = RequestInit & {
  params?: Record<string, string>;
};

export async function request<T>(endpoint: string, options: RequestOptions = {}): Promise<T> {
  const { params, ...customConfig } = options;
  
  const queryString = params ? `?${new URLSearchParams(params).toString()}` : '';
  const url = `${BASE_URL}${endpoint}${queryString}`;

  const headers = {
    ...customConfig.headers,
  };

  const config: RequestInit = {
    ...customConfig,
    headers,
  };

  try {
    const response = await fetch(url, config);
    
    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw {
        status: response.status,
        message: errorData.message || 'Terjadi kesalahan pada server',
        data: errorData,
      };
    }

    return await response.json();
  } catch (error) {
    throw error;
  }
}