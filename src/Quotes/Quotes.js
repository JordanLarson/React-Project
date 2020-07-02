import React, { useState, useEffect } from "react";
import "./Quotes.scss";

const Quotes = (props) => {
  const [quoteInfo, setQuoteInfo] = useState("");
  const [whoIsQuoted, setWhoIsQuoted] = useState("");
  const [buttonClick, setButtonClick] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    setButtonClick(buttonClick + 1);
  };

  useEffect(() => {
    const makeApiCall = async () => {
      const urlData = "https://api.tronalddump.io/random/quote";
      const res = await fetch(urlData);
      const data = await res.json();
      const quoteInfo = data.value;
      setQuoteInfo("Quote: " + data.value);
      setWhoIsQuoted("Referencing: " + data.tags[0]);
    };
    makeApiCall();
  }, [buttonClick]);
  return (
    <div>
      <h4> Donald's Funny Quotes </h4>
      <form>
        <button onClick={handleSubmit}>
          <span>Get New Quote</span>
        </button>
        <h5 key="quoteInfo"> {quoteInfo} </h5>
        <h5 key="whoIsQuoted"> {whoIsQuoted}</h5>
      </form>
    </div>
  );
};

export default Quotes;
