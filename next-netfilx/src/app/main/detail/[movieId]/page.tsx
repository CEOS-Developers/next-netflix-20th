import { getMovieInfoByMovieId } from "@/app/lib/movieApi";
import { MovieDetailClient } from "@/components/DetailPage/MovieDetailClient";

type PageProps = {
  params: Promise<{ movieId: string }>;
};

export default async function MovieDetail(props: PageProps) {
  const { movieId } = await props.params;

  const movie = await getMovieInfoByMovieId(movieId);
  console.log(movie);

  return <MovieDetailClient data={movie} />;
}
