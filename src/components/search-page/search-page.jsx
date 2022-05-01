import { Search } from "./search";
import "./search-page.css";
import { SearchResult } from "./search-result";
import { useEffect, useState, useRef } from "react";
import { searchCoins } from "../../utility";

const SearchPage = () => {
  const [inputText, setInputText] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const timeout = useRef();

  const debounceSearch = (inputText) => {
    clearTimeout(timeout.current);
    if (inputText.trim()) {
      timeout.current = setTimeout(
        () => searchCoins(inputText, setSearchResult),
        700
      );
    }
  };

  useEffect(() => {
    debounceSearch(inputText);
  }, [inputText]);

  return (
    <main className="m-up-5">
      <div className="title center-text is-5 m-up-6">Add to portfolio</div>
      <Search setInputText={setInputText} />
      <SearchResult searchResult={searchResult} />
    </main>
  );
};

export { SearchPage };