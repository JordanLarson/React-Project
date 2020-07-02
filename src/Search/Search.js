import React, { useState, useEffect } from "react";
import "./Search.scss";

const Search = (props) => {
  const [quoteInfo, setQuoteInfo] = useState("data.value");
  const [whoIsQuoted, setWhoIsQuoted] = useState("");
  const [searchTermPartial, setSearchTermPartial] = useState("");

  const handleChange = (e) => {
    console.log("handleChange clicked", e.target.value);
    setSearchTermPartial(e.target.value);
  };

  useEffect(() => {
    const makeApiCall = async () => {
      const urlData = `https://api.tronalddump.io/search/quote?query=${searchTermPartial}`;
      const res = await fetch(urlData);
      const data = await res.json();
      if (data.count > 0) {
        const quoteCount = data._embedded.quotes.length;
        const quoteIndex = Math.floor(Math.random() * quoteCount);
        const quote = data._embedded.quotes[quoteIndex];

        setQuoteInfo("Quote: " + quote.value);
        setWhoIsQuoted("Referencing: " + quote.tags[0]);
      } else {
        setQuoteInfo("Try a new search");
        setWhoIsQuoted("");
      }
    };
    makeApiCall();
  }, [searchTermPartial]);
  return (
    <div>
      <form>
        <h4>Search for a quote</h4>
        <input
          type="text"
          placeholder=""
          onChange={handleChange}
          value={searchTermPartial}
        />
      </form>
      <h5 key={quoteInfo}> {quoteInfo} </h5>
      <h5 key={whoIsQuoted}>{whoIsQuoted}</h5>
    </div>
  );
};

export default Search;
