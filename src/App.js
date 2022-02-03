import "./styles.css";
import React, { useState, useEffect } from "react";

export default function App() {
  var [state, setState] = useState({
    query: "",
    keyword: ""
  });
  var [gifs, setGifs] = useState({
    gifs: []
  });
  useEffect(() => {
    fetch(
      `https://api.giphy.com/v1/gifs/search?q=${state.keyword}&api_key=y1ZFwiomdYKWy80gtSxU4iEdv165yeOD`
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data.data);
        setGifs({ ...gifs, gifs: data.data });
      });
  }, [state.keyword]);
  const displayImage = (e) => {
    setState({ ...state, keyword: state.query });
  };
  return (
    <div className="App">
      <h1>Gif Search</h1>
      <div>
        <input
          className="flex-item"
          value={state.query}
          onChange={(e) => {
            setState({ ...state, query: e.target.value });
          }}
        />
        <br />
        <br />
        <button onClick={displayImage}>Get Gifs</button>
      </div>
      <div className="img-box">
        {gifs.gifs.map((gif) => (
          <img
            src={gif.images.original.url}
            height="200px"
            className="flex-item"
          ></img>
        ))}
      </div>
    </div>
  );
}
