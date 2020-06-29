import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

let i = 1;

const Quotes = (props) => {
  const [quoteInfo, setQuoteInfo] = useState("data.value");
  const [whoIsQuoted, setWhoIsQuoted] = useState("");
  const [urlData, setUrlData] = useState([]);

  useEffect(() => {
    const makeApiCall = async () => {
      const urlData = "https://api.tronalddump.io/random/quote";
      const res = await fetch(urlData);
      const data = await res.json();
      const quoteInfo = data.value;
      const whoIsQuoted = data.tags[0];
      console.log(data);
      console.log(data.value);
      console.log(data.appeared_at);
      console.log(data.tags[0]);
      console.log(quoteInfo);
      setQuoteInfo(data.value);
    };
    makeApiCall();
  }, [i]);
  return (
    <div>
      <h3> Donald's Funny Quotes </h3>
      <h5 key={quoteInfo}> quote: {quoteInfo} </h5>
      <h5 key={urlData}> referencing: {whoIsQuoted}</h5>
    </div>
  );
};

export default Quotes;
// {quoteInfo.localeCompare((element, value) => {
// return
// key={props.data.id};})}
