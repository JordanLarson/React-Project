import React, { createContext } from "react";
import "./App.scss";
import { Route, Link } from "react-router-dom";
import Quotes from "./Quotes/Quotes";
import MyMemes from "./Memes/Memes";
import Search from "./Search/Search";
import About from "./About/About";

export const DataContext = createContext();

function App(props) {
  return (
    <div className="App">
      <div>
        <h1>Donald Trump's Quotes</h1>
        <nav className="donny-nav">
          <Link
            style={{ textDecoration: "none", color: "#292f36" }}
            to="/Quotes"
          >
            <h3 className="top-left">Quotes</h3>
          </Link>
          <Link
            style={{ textDecoration: "none", color: "#292f36" }}
            to="/Memes"
          >
            <h3 className="top-right">Gifs</h3>
          </Link>
          <Link
            style={{ textDecoration: "none", color: "#292f36" }}
            to="/Search"
          >
            <h3 className="bottom-left"> Search Quotes</h3>
          </Link>
          <Link
            style={{ textDecoration: "none", color: "#292f36" }}
            to="/About"
          >
            <h3 className="bottom-right"> About </h3>
          </Link>
        </nav>
        <main>
          <Route
            exact
            path="/Quotes"
            render={(routerProps) => <Quotes {...routerProps} />}
          />
          <Route
            path="/Memes"
            render={(routerProps) => <MyMemes {...routerProps} />}
          />
          <Route
            path="/Search"
            render={(routerProps) => <Search {...routerProps} />}
          />
          <Route
            path="/About"
            render={(routerProps) => <About {...routerProps} />}
          />
        </main>
        <footer>&#169; 2020 </footer>
      </div>
    </div>
  );
}

export default App;
