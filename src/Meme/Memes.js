// import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";

// const MyMemes = (props) => {
//   const [memeInfo, setMemeInfo] = useState("data.value");
//   // const [urlData, setUrlData] = useState("")
//   const handleSubmit = (e) => {
//     props.onSubmit(memeInfo);
//     setInput("");
//   };
//   useEffect(() => {
//     const makeApiCall = async () => {
//       const urlData = "https://api.tronalddump.io/random/meme";
//       const res = await fetch(urlData);
//       const data = await res.json();
//       const meme = data._embedded.meme;

//       setMemeInfo(data._embedded.meme);
//     };
//     makeApiCall();
//   }, []);
//   return (
//     <div>
//       <img>{data._embedded.meme}</img>
//       <h3> Donald Memes </h3>
//     </div>
//   );
// };

// export default MyMemes;
