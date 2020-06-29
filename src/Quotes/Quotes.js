import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Quotes = (props) => {
  const [quoteInfo, setQuoteInfo] = useState("");
  const [myQuotes, setMyQuotes] = useState("");
  const [urlData, setUrlData] = useState([]);
  useEffect(() => {
    const makeApiCall = async () => {
      const urlData = "https://api.tronalddump.io/random/quote";
      const res = await fetch(urlData);
      const data = await res.json();
      const quoteInfo = data.value;
      console.log(data);
      console.log(data.value);
      console.log(data.appeared_at);
      console.log(quoteInfo);
    };
    makeApiCall();
  }, [quoteInfo]);
  return (
    <div>
      <h5>yo: {quoteInfo} </h5>
      <h3> Donald's Funny Quotes </h3>
    </div>
  );
};

export default Quotes;
// {quoteInfo.localeCompare((element, value) => {
// return
// key={props.data.id};})}
