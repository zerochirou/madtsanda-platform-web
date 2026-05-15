// app/api/old-path/route.ts
import { redirect } from 'next/navigation';

export async function GET(request: Request) {
  redirect('/dashboard/news/table'); 
}