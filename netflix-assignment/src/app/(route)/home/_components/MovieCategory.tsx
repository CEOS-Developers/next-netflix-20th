"use client"

import {  movieCategories } from '@/data/categories';
import ContentRow from './ContentRow';
import { useFetchAllMovies } from '@/hooks/useFetchContents';

export default function MovieCategory() {
    const { data: movies, isLoading } = useFetchAllMovies();


  if (isLoading) {
    return <div className="text-center">Loading...</div>;
  }
  return (
    <>
      {movieCategories.map((item) => (
        <ContentRow key={item.category} title={item.title} content={movies?.[item.category] ?? []}
        />
      ))}
    </>
  );
}
