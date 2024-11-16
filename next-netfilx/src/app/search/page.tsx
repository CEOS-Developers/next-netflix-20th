"use client";

import { useState, useEffect, useCallback } from "react";

import { getSearchMovies, getRandomMovies } from "../lib/movieApi";
import styled from "styled-components";
import throttle from "lodash.throttle"; // throttle 사용해서 과도한 렌더링을 방지하고 API 호출 빈도를 줄여, 페이지 성능을 향상

import SearchBox from "@/components/SearchPage/SearchBox";
import SearchResultList from "@/components/SearchPage/SearchResultList";
import { Movie } from "@/components/MainPage/MovieCategoriesList";
import ClientLayout from "../clientLayout";

const SearchPage: React.FC = () => {
  const [query, setQuery] = useState(""); // 검색어 상태
  const [results, setResults] = useState<Movie[]>([]); // 검색 결과 상태
  const [page, setPage] = useState(1); // 현재 페이지 (page 하나 당 20개 영화 요소, 스크롤 시 이 값이 증가하여 더 많은 영화 요소 가져 옴)
  const [isLoading, setIsLoading] = useState(false); // 로딩 상태

  useEffect(() => {
    if (!query) {
      async function fetchRandomMovies() {
        try {
          setIsLoading(true);
          const movies = await getRandomMovies();
          // 로딩 시간을 늘리기 위해 1초 지연 후 결과를 업데이트
          setTimeout(() => {
            setResults(movies); // 무작위 영화 목록 저장
            setIsLoading(false); // 로딩 상태 종료
          }, 500); // 0.5초 동안 로딩 상태 유지 (스켈레톤 구현 보이기 위함)
        } catch (error) {
          console.error("Error fetching random movies:", error);
          setIsLoading(false);
        }
      }
      fetchRandomMovies();
    }
  }, [query]);

  // 검색 시 영화 불러오기
  useEffect(() => {
    if (query) {
      async function getSearchResults() {
        try {
          const data = await getSearchMovies(query, page); // 현재 페이지에 맞는 데이터 요청
          setResults((prev) => {
            const combined = [...prev, ...data];
            return combined.filter(
              (movie, index, self) =>
                self.findIndex((m) => m.id === movie.id) === index
            );
          });
        } catch (error) {
          console.error("Error fetching search results:", error);
        }
      }

      getSearchResults();
    }
  }, [query, page]); // 검색어와 페이지가 변경될 때만 search API 호출

  // 검색어가 바뀔 때! 페이지를 1로 초기화하고 결과를 새로 불러옴
  const handleSearch = (searchQuery: string) => {
    setQuery(searchQuery);
    setPage(1); // 페이지 초기화 (여기서 page 값이 바뀌면 useEffect가 실행됨)
    setResults([]); // 결과 초기화
  };

  // 무한 스크롤 감지 (throttle 적용)
  const handleScroll = useCallback(
    throttle(() => {
      const container = document.querySelector("#PageContainer");
      if (container) {
        const isBottom =
          container.scrollHeight - container.scrollTop <=
          container.clientHeight + 100;
        if (isBottom && !isLoading) {
          setPage((prev) => prev + 1); // 페이지 증가
        }
      }
    }, 300),
    [isLoading] // 의존성 배열에 isLoading을 추가하여 해당 값이 변경될 때만 함수 실행
  );

  useEffect(() => {
    const container = document.querySelector("#PageContainer");
    container?.addEventListener("scroll", handleScroll);
    return () => {
      container?.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]); // handleScroll이 변경될 때마다 useEffect가 실행되도록 의존성 배열에 추가

  return (
    <ClientLayout>
      <PageContainer id="PageContainer">
        <SearchBox onSearch={handleSearch} />
        <SearchResultList results={results} isLoading={isLoading} />
        {results.length === 0 && <NoResult>No results 😭</NoResult>}
      </PageContainer>
    </ClientLayout>
  );
};

export default SearchPage;

const PageContainer = styled.div`
  width: 375px;
  height: 100vh;
  margin: 0 auto;
  overflow-y: auto; /* 전체 화면이 아닌 부모 요소 내에서 스크롤 가능하게 설정 */
  background-color: black;
  display: flex;
  flex-direction: column;

  &::-webkit-scrollbar {
    display: none;
  }
`;

const NoResult = styled.p`
  display: flex;
  justify-content: center;
`;
