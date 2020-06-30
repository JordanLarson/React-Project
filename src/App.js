import React, { useState, useEffect, createContext } from "react";
import "./App.css";
import { Route, Link } from "react-router-dom";
import Quotes from "./Quotes/Quotes";
import MyGifs from "./Gifs/Gifs";

export const DataContext = createContext();

function App(props) {
  const [myQuotes, setMyQuotes] = useState("");
  const [initialId, setInitialId] = useState("");

  const handleSubmit = async (currentKey) => setInitialId(currentKey);

  const addQuote = (element) => {
    setMyQuotes(element);
  };
  return (
    <div className="App">
      <div>
        <h1>Donald Trump Quotes</h1>
        <nav className="donnyNav">
          <Link to="/Quotes">
            <h3>Quotes</h3>
          </Link>
          <Link to="/MyGifs">
            <h3>Gifs</h3>
          </Link>
        </nav>
        <main>
          <Route
            exact
            path="/Quotes"
            render={(routerProps) => (
              <Quotes
                {...routerProps}
                addQuote={addQuote}
                onSubmit={handleSubmit}
              />
            )}
          />
          <Route
            path="/MyGifs"
            render={(routerProps) => <MyGifs {...routerProps} />}
          />
        </main>
      </div>
    </div>
  );
}

export default App;
