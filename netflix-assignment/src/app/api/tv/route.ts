import { NextRequest, NextResponse } from 'next/server';
import axios from 'axios';

const instance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  params: {
    api_key: process.env.NEXT_PUBLIC_TMDB_API_KEY,
    language: 'en-US',
    page: 1,
  },
});

export async function GET(req: NextRequest) {
    // 동적으로 카테고리를 가져옴
  const pathSegments = req.nextUrl.pathname.split('/');
  const category = pathSegments[pathSegments.length - 1] || 'popular';
  
  try {
    const response = await instance.get(`/tv/${category}`);
    return NextResponse.json(response.data.results);
  } catch (error) {
    console.error('Error fetching TV shows:', error);
    return NextResponse.json({ error: 'Failed to fetch TV shows' }, { status: 500 });
  }
}
