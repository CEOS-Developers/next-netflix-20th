"use client";

import { useState } from "react";
import SearchBar from './_components/SearchBar'
import SearchedMovie from './_components/SearchedMovie'

export default function Search() {
  const [query, setQuery] = useState("");

  return (
    <div className=''>
      <SearchBar onSearch={setQuery} />
      <SearchedMovie query={query} />
    </div>
  );
}
