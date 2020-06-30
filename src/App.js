import React, { useState, useEffect, createContext } from "react";
import "./App.scss";
import { Route, Link } from "react-router-dom";
import Quotes from "./Quotes/Quotes";
import MyMemes from "./Meme/Memes";
import Search from "./Search/Search";

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
          <Link to="/MyMemes">
            <h3>Memes</h3>
          </Link>
          <Link to="/Search">
            <h3> Search Quotes</h3>
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
            path="/MyMemes"
            render={(routerProps) => <MyMemes {...routerProps} />}
          />
          <Route
            path="/Search"
            render={(routerProps) => (
              <Search {...routerProps} onSubmit={handleSubmit} />
            )}
          />
        </main>
      </div>
    </div>
  );
}

export default App;
