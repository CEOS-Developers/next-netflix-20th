import { Content } from '@api/types';
import Link from 'next/link';
import Image from 'next/image';

const BigSquareList = ({
  contents,
  title,
}: {
  contents: Content[];
  title: string;
}) => {
  return (
    <div className="pl-4">
      <p className="text-xl font-bold mb-4">{title}</p>
      <div className="flex overflow-scroll gap-2">
        {contents.map((content) => (
          <Link
            key={content.id}
            href={`/details/${content.media_type}/${content.id}`}
          >
            <div className="h-60 min-w-36 relative rounded-sm my-1">
              <Image
                src={`https://image.tmdb.org/t/p/original${content.poster_path}`}
                alt={content.title || content.name || ''}
                layout="fill"
                objectFit="cover"
                className="rounded-sm cursor-pointer hover:scale-105"
              />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default BigSquareList;