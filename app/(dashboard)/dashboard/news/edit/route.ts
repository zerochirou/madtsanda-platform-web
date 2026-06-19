// app/api/old-path/route.ts
import { redirect } from 'next/navigation';

export async function GET() {
  redirect('/dashboard/news/table'); 
}
