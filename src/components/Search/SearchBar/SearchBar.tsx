import Link from "next/link";
import { FC } from "react";
import { Search } from "..";

export const SearchBar: FC = () => {
  return (
    <div className="flex items-center bg-slate-800 text-slate-50 p-4 shadow-xl">
      <Link href="/favourites">Favourites</Link>
      <div className="flex items-center ml-auto">
        <label className="block mr-2" htmlFor="search-input">
          Search for a beer:{" "}
        </label>
        <Search
          id="search-input"
          className="p-2 outline-none focus-within:outline-1 focus-within:outline-cyan-500 text-slate-700"
        />
      </div>
    </div>
  );
};
