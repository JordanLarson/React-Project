import React, { createContext } from "react";
import "./App.scss";
import { Route, Link } from "react-router-dom";
import Quotes from "./Quotes/Quotes";
import MyMemes from "./Meme/Memes";
import Search from "./Search/Search";
import About from "./About/About";

export const DataContext = createContext();

function App(props) {
  return (
    <div className="App">
      <div>
        <h1>#Covfefe</h1>
        <nav className="donnyNav">
          <Link
            style={{ textDecoration: "none", color: "#292f36" }}
            to="/Quotes"
          >
            <h3 className="topleft">Quotes</h3>
          </Link>
          <Link
            style={{ textDecoration: "none", color: "#292f36" }}
            to="/MyMemes"
          >
            <h3 className="topRight">Gifs</h3>
          </Link>
          <Link
            style={{ textDecoration: "none", color: "#292f36" }}
            to="/Search"
          >
            <h3 className="bottomLeft"> Search Quotes</h3>
          </Link>
          <Link
            style={{ textDecoration: "none", color: "#292f36" }}
            to="/About"
          >
            <h3 className="bottomRight"> About </h3>
          </Link>
        </nav>
        <main>
          <Route
            exact
            path="/Quotes"
            render={(routerProps) => <Quotes {...routerProps} />}
          />
          <Route
            path="/MyMemes"
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
      </div>
    </div>
  );
}

export default App;
