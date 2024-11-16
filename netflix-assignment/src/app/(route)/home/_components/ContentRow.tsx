"use client"

import Link from 'next/link';
import { Movie } from '@/types/movie';
import { TvShow } from '@/types/tvshows';

type Props = {
  title: string;

  content: Movie[] | TvShow[] | null; 

};

export default function ContentRow({ title, content }: Props) {

  if (!content || content.length === 0) return null;
  const getAltText = (item: Movie | TvShow) => 
    'title' in item ? item.title : 'name' in item ? item.name : 'No Title';

  const getPrefix = (item: Movie | TvShow) => 
    'title' in item ? 'movie' : 'name' in item ? 'tv' : 'No';



  return (
    <section className='w-full h-[191px] mt-[22px]'>
      <h2 className="text-[20.92px] font-bold mb-[14px]">{title}</h2>
      <div className="flex overflow-x-scroll scrollbar-hide gap-[7px]">
        {content.map((item) => (
          <Link
            key={`${getPrefix(item)}-${item.id}`}
            href={`/content_details/${getPrefix(item)}/${item.id}`}
            className="w-[103px] h-[161px] flex-shrink-0 rounded-[2px] cursor-pointer"
          >
            <img
              src={`https://image.tmdb.org/t/p/w300${item.poster_path}`}
              alt={getAltText(item)}
              className="w-full h-full object-cover rounded-lg"
            />
        </Link>
        ))}
      </div>
    </section>
  );
}
