import { NextResponse } from 'next/server';
import { saveSubmission } from '@/lib/fileStore';

export async function POST(req: Request) {
  const body = await req.json();

  saveSubmission(body);

  return NextResponse.json({ success: true });
}
