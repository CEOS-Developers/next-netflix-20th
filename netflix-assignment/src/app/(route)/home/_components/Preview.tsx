"use client"

import { Movie } from '@/types/movie';
import { TvShow } from '@/types/tvshows';
import { useFetchAllMovies, useFetchAllTvShows } from '@/hooks/useFetchContents';
import Link from 'next/link';

export default function Preview() {
    const { data: movies } = useFetchAllMovies();
    const { data: tvShows } = useFetchAllTvShows();

    if (!movies || !tvShows) {
        return null; // 데이터가 로드되지 않았을 경우
      }

  
    // 데이터를 모두 통합해서 하나의 배열로 병합
    const combinedMovies = Object.values(movies).flat();
    const combinedTvShows = Object.values(tvShows).flat();
    const combinedContent: (Movie | TvShow)[] = [...combinedMovies, ...combinedTvShows];
    const getRandomItems = (content: (Movie | TvShow)[], count: number) => {
        const shuffled = content.sort(() => 0.5 - Math.random()); // 배열 섞기
        return shuffled.slice(0, count); // 앞에서부터 count 개수만큼 자르기
    };

    const randomContent = getRandomItems(combinedContent, 20);

    if (randomContent.length === 0) return null;

  return (
    <section className="w-full mt-[33px]">
      <h2 className="text-[26.75px] font-bold mb-[23px]">Previews</h2>
      <article className="flex items-center overflow-x-scroll scrollbar-hide gap-[7px]">
        {randomContent.map((item, index) => (
          <Link
            key={index}
            href={`/content_details/${item.media_type}/${item.id}`}
            className="min-w-[102px] min-h-[102px] w-[102px] h-[102px] flex-shrink-0 overflow-hidden "
          >
            <img
              src={`https://image.tmdb.org/t/p/w300${item.poster_path}`}
              alt={
                'title' in item
                  ? item.title || 'No Title'
                  : item.name || 'No Title'
              }
              className="w-full h-full object-cover rounded-full"
            />
          </Link>
        ))}
      </article>
    </section>
  );
}
