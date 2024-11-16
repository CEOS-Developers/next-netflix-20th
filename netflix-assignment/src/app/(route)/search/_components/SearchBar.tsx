"use client"

import SearchBarIcon from '../../../../public/svg/SearchBar.svg'
import Close from '../../../../public/svg/Close.svg'
import { useState } from 'react';

export default function SearchBar({ onSearch }: { onSearch: (query: string) => void }) {
  const [query, setQuery] = useState("");
  // 검색어 상태를 관리해서 API 요청에 사용

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  const searchInput = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      onSearch(query.trim());
    }
  }; // Enter 키 입력 시 검색

  const clearInput = () => {
    setQuery("");
    onSearch("");
  }; // 검색어 초기화

  return (
      <section className="w-full mt-11 px-5 h-[52px] bg-[#424242] flex justify-between items-center">
        <SearchBarIcon />
        <input
        value={query}
        onChange={handleInputChange}
        onKeyDown={searchInput}
        placeholder='Search for a show, movie, genre, e.t.c.'
        className='flex-1 mx-5 focus:outline-none bg-transparent text-[#C4C4C4] placeholder:text-[#C4C4C4]'>
        </input>
        <button onClick={clearInput}>
          <Close />
        </button>
    </section>
  );
}
