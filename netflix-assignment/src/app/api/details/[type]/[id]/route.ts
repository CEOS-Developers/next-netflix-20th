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

export async function GET(req: NextRequest, { params }: { params: { type: string; id: string } }) {
  const { type, id } = params;

  // 유효한 type인지 검사
  if (type !== 'movie' && type !== 'tv') {
    return NextResponse.json({ error: 'Invalid type' }, { status: 400 });
  }

  try {
    // 동적으로 받은 type, id를 사용하여 API 요청
    const response = await instance.get(`/${type}/${id}`);
    
    return NextResponse.json(response.data);
  } catch (error) {
    console.error(`Error fetching ${type} details:`, error);
    return NextResponse.json({ error: 'Failed to fetch movie details' }, { status: 500 });
  }
}
