'use server'

import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
import { removeAccessTokenService } from '../services/logout'

export async function handleLogout() {
  const cookieStore = await cookies()
  const token = cookieStore.get('auth_token')?.value
  await removeAccessTokenService(token as string)
  cookieStore.delete('auth_token')

  redirect('/login')
}