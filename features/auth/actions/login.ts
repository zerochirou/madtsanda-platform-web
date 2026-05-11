'use server'

import { z } from 'zod'
import { accessTokenService } from '../services/login'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
import { loginSchema } from '@/types/dto/user'
import { LoginFailedResponseDTO } from '@/types/dto/auth'

async function handleLogin(data: z.infer<typeof loginSchema>) {
  const result = await accessTokenService(data)

  if ('errors' in result) {
    return result as LoginFailedResponseDTO
  }

  if (result.data && result.data.token) {
    const cookieStore = await cookies()

    cookieStore.set('auth_token', result.data.token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      maxAge: 60 * 60 * 24 * 7,
      path: '/',
    })
  }

  redirect('/dashboard')
}

export { handleLogin }