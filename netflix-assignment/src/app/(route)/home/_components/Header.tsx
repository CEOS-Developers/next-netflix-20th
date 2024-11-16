"use client"

import { useEffect, useState } from "react";
import { useFetchAllMovies } from "@/hooks/useFetchContents";
import { Movie } from "@/types/movie";
import Top10 from "@/public/svg/Top10.svg";
import Link from "next/link";

export default function Header() {
    const { data: movies, isLoading } = useFetchAllMovies();
    const [randomIndex, setRandomIndex] = useState<number>(0);
    const [randomMovie, setRandomMovie] = useState<Movie | null>(null);


    // 랜덤한 영화를 선택하는 함수
    const getRandomMovie = () => {
        if (movies?.popular && movies.popular.length > 0) {
        const index = Math.floor(Math.random() * (movies.popular.length / 2));
        setRandomIndex(index);
        return movies.popular[index];
        }
        return null;
    };

    // 데이터 로딩이 완료되면 랜덤 영화 선택
    useEffect(() => {
        if (!isLoading) {
            const randomMovie = getRandomMovie();
            setRandomMovie(randomMovie);
        }
    }, [movies, isLoading]);

    
    return (
        <Link 
            className="relative w-full h-[415px] bg-cover bg-center"
            style={{
                backgroundImage: `url(https://image.tmdb.org/t/p/original${randomMovie?.backdrop_path})`,
            }}
            href={`/content_details/movie/${randomMovie?.id}`}
            >
            {/* 그림자 그라데이션 추가 */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
                    
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 flex justify-center items-center gap-[5px]">
                <Top10/>
                <span className="text-[13.72px] font-bold text-center">
                    #{randomIndex+1} in Korea Today
                </span>
            </div>
        </Link>
    );
}
