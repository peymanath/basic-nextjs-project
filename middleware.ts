import { DictionaryMiddlewareConfig } from '@/dictionary/middleware-config';
import type { NextRequest } from 'next/server';

export async function middleware(request: NextRequest) {
  // ====================== Dictionary Config ====================== //
  return DictionaryMiddlewareConfig(request);
  // ====================== Dictionary Config ====================== //
}
