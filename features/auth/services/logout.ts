'use server'

import { request } from '@/lib/request'

async function removeAccessTokenService(token: string) {
  await request(`/auth/logout`, {
    method: 'DELETE',
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
  })
}

export { removeAccessTokenService }