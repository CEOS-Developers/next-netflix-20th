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
    include_adult: false,
  },
});

// 영화 검색 GET 요청 처리
export async function GET(req: NextRequest) {
  const url = req.nextUrl;
  const query = url.searchParams.get('query');
  
  if (!query) {
    return NextResponse.json({ error: '검색어가 필요합니다.' }, { status: 400 });
  } // 검색어 없을 시 로직 수정하기

  try {
    const response = await instance.get(`/search/movie`, {
      params: {
        query,
        page: 1, // 페이지가 있어도 되나?..
      }
    });

    return NextResponse.json(response.data.results); // 결과 반환
  } catch (error) {
    console.error('Error searching movies:', error);
    return NextResponse.json({ error: 'Failed to searching movies' }, { status: 500 });
  }
}