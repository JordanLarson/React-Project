import React, { useState, useEffect } from "react";
import "./Quotes.scss";

const Quotes = (props) => {
  const [quoteInfo, setQuoteInfo] = useState("data.value");
  const [whoIsQuoted, setWhoIsQuoted] = useState("");

  useEffect(() => {
    const makeApiCall = async () => {
      const urlData = "https://api.tronalddump.io/random/quote";
      const res = await fetch(urlData);
      const data = await res.json();
      const quoteInfo = data.value;
      console.log(data);
      console.log(data.value);
      console.log(data.appeared_at);
      console.log(data.tags[0]);
      console.log(quoteInfo);
      setQuoteInfo(data.value);
      setWhoIsQuoted(data.tags[0]);
    };
    makeApiCall();
  }, []);
  return (
    <div>
      <h4> Donald's Funny Quotes </h4>
      <form>
        <button>Get New Quote</button>
        <h5 key={quoteInfo}> Random Quote: {quoteInfo} </h5>
        <h5 key={whoIsQuoted}> referencing: {whoIsQuoted}</h5>
      </form>
    </div>
  );
};

export default Quotes;
