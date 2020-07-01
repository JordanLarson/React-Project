import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const MyMemes = (props) => {
  const [imageUrl, setImageUrl] = useState("");
  const [imageIndex, setImageIndex] = useState(0);
  const buttonClicked = (e) => {
    e.preventDefault();
    setImageIndex(imageIndex + 1);
  };
  useEffect(() => {
    const makeApiCall = async () => {
      let myKey = "2AZFPVbMZTRsEZIxFItNswUi5wSkTg5c";
      const urlData = `https://api.giphy.com/v1/gifs/search?api_key=${myKey}&q=trump`;
      const res = await fetch(urlData);
      const data = await res.json();
      console.log(imageIndex);

      if (imageIndex >= data.data.length - 1) {
        setImageIndex(0);
      }
      console.log(data);
      setImageUrl(data.data[imageIndex].images.fixed_height.url);
    };
    makeApiCall();
  }, [imageIndex]);
  return (
    <div>
      <button onClick={buttonClicked}>Get New Gif</button>
      <img src={imageUrl}></img>
      <h3> Donald Gifs </h3>
    </div>
  );
};

export default MyMemes;