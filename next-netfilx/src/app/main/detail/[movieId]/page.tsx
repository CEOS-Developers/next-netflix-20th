import { getMovieInfoByMovieId } from "@/app/lib/movieApi";
import ClientLayout from "@/app/clientLayout";
import { MovieDetailClient } from "@/components/DetailPage/MovieDetailClient";

type PageProps = {
  params: Promise<{ movieId: string }>;
};

export default async function MovieDetail(props: PageProps) {
  const { movieId } = await props.params;

  const movie = await getMovieInfoByMovieId(movieId);

  return (
    <ClientLayout>
      <MovieDetailClient data={movie} />
    </ClientLayout>
  );
}
