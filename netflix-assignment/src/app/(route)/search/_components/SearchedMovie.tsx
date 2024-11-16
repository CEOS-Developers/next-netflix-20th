"use client"

import { useState, useEffect } from 'react';
import { useFetchSearchedMovies } from '@/hooks/useFetchContents';
import Play from '../../../../public/svg/Play.svg'
import { Movie } from '@/types/movie';
import { TvShow } from '@/types/tvshows';

type SearchedProps = {
  query: string;
};

const MovieCard = ({ movie }: { movie: Movie }) => (
  <div key={movie.id} className="w-[146px] h-[220px] bg-gray-800">
    <img
      src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
      alt={movie.title || 'Title'}
      className="w-[146px] h-[76px] object-cover"
    />
    <div className="px-2">
      <p className="text-[14.72px]">{movie.title}</p>
      <Play />
    </div>
  </div>
);

export default function SearchedMovie({ query }: SearchedProps) {
  const { data } = useFetchSearchedMovies(query);

  if (!data) return <p>검색된 영화가 없습니다.</p>;

  return (
    <section className="w-full mt-4">
      <h2 className="text-[26.75px] font-bold mb-[21px] ml-[10px]">Top Searches</h2>
      <div className="flex flex-wrap gap-4">
        {data.map((movie: Movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </section>
  );
}