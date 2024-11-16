import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

const fetchDetails = async (type: string | null, id: string | null) => {
    const response = await axios.get(`/details/${type}/${id}`);
    return response.data;
};

export const useFetchDetails = (type: 'movie' | 'tv' | null, id: string | null) => {
    return useQuery({
        queryKey: ['details', type, id],
        queryFn: () => fetchDetails(type, id),
        staleTime: 1000 * 60 * 60,
        enabled: !!type && !!id, // type과 id가 존재할 때만 실행
    });
};