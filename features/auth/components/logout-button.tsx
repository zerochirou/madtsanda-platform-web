'use client'

import { handleLogout } from '../actions/logout'
import { Button } from '@/components/ui/button'
import { LogOut } from 'lucide-react'

export function LogoutButton() {
  return (
    <Button variant="destructive" onClick={async () => await handleLogout()}>
      <LogOut className="mr-2 h-4 w-4" />
      Logout
    </Button>
  )
}