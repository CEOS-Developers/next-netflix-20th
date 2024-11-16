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
  <div key={movie.id} className="flex justify-between items-center h-[76px] mb-[3px] pr-3 bg-[#424242]">
    <img
      src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
      alt={movie.title || 'Title'}
      className="w-[146px] h-[76px] object-cover"
    />
    <p className="w-40 text-[14.72px] overflow-hidden whitespace-break-spaces text-left">{movie.title}</p>
    <Play />
  </div>
);

export default function SearchedMovie({ query }: SearchedProps) {
  const { data } = useFetchSearchedMovies(query);

  if (!data) return

  return (
    <section className="w-full mt-4">
      <h2 className="text-[26.75px] font-bold mb-[21px] ml-[10px]">Top Searches</h2>
      {data.map((movie: Movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </section>
  );
}