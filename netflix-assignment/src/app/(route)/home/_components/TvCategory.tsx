"use client"

import { tvCategories } from '@/data/categories';
import ContentRow from './ContentRow';
import { useFetchAllTvShows } from '@/hooks/useFetchContents';

export default function TvCategory() {
    const { data: tvShows, isLoading } = useFetchAllTvShows();

    if (isLoading) {
        return <div className="text-center">Loading...</div>;
    }
    return (
        <>
        {tvCategories.map((item) => (
            <ContentRow key={item.category} title={item.title} content={tvShows?.[item.category] ?? []}/>
        ))}
        </>
    );
}
