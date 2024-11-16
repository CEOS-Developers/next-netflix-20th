"use client"

import { useFetchDetails } from "@/hooks/useFetchDetails";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import RightArrow from '@/public/svg/RightArrow.svg';


export default function DetailPage() {
    const pathname = usePathname();
    const [type, setType] = useState<'movie' | 'tv' | null>(null);
    const [id, setId] = useState<string | null>(null);
    
    useEffect(() => {
        if (pathname) {
            const pathParts = pathname.split('/');
            if (pathParts.length >= 4) {
                setType(pathParts[2] as 'movie' | 'tv');
                setId(pathParts[3]);
            }
        }
    }, [pathname]);
    const { data: contentDetails, isLoading } = useFetchDetails(type, id);
    
    if (isLoading) return <p>Loading...</p>;
    if (!contentDetails) return <div>Detail not found</div>;
    
    return (
        <div className="w-full h-full flex flex-col items-center">
            <div 
                className="relative w-full h-[415px] bg-cover bg-center"
                style={{
                    backgroundImage: `url(https://image.tmdb.org/t/p/original${contentDetails?.backdrop_path})`,
                }}
                >
                {/* 그림자 그라데이션 추가 */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
            </div>
            <button className="w-[303px] h-[45px] flex justify-center items-center gap-[15px] rounded-[5.63px] bg-[#C4C4C4] mt-[13px] text-black hover:bg-[#8C8787]">
                <RightArrow className='stroke-current '/>
                <p className='text-[20.46px] font-semibold'>Play</p>
            </button>
            <div className="w-[303px] flex flex-col gap-6 mt-[22px] text-white">
                <h2 className="text-[26.75px] font-bold">
                    {type === 'movie' ? contentDetails.title : contentDetails.name}
                </h2>
                <p className="text-[11.14px] font-normal line-[14.17px]">
                    {contentDetails.overview}
                </p>

            </div>
        </div>
    );
}
