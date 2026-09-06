'use server'

import { z } from 'zod'
import { accessTokenService } from '../services/login'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
import { loginSchema } from '@/types/dto/user'
import { LoginFailedResponseDTO } from '@/types/dto/auth'

async function handleLogin(data: z.infer<typeof loginSchema>) {
  const result = await accessTokenService(data)

  // === ERROR RESPONSE ===
  if (result?.data && "code" in result.data) {
    return result as LoginFailedResponseDTO
  }

  // === SUCCESS RESPONSE ===
  if (result?.data && "token" in result.data) {
    const cookieStore = await cookies()

    // Sinkronisasi mutlak: 24 jam (86400 detik) sesuai expiresIn token backend AdonisJS
    cookieStore.set('auth_token', result.data.token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      maxAge: 60 * 60 * 24, // 24 jam (86400 detik)
      path: '/',
    })

    // Redirect ke dashboard
    redirect('/dashboard')
  }

  // Fallback jika response tidak sesuai ekspektasi
  return {
    data: {
      message: "Response dari server tidak valid",
      code: 500,
    },
  } as LoginFailedResponseDTO
}

export { handleLogin }
