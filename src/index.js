import React from "react";
import ReactDOM from "react-dom";

import Assignment from "./Assignment";
import organizeEarthquakes from "./organizeEarthquakes";

/**
 * You will need to implement these two yourself!
 */
import TableRow from "./components/TableRow/TableRow";
import TableHeader from "./components/TableHeader/TableHeader";

import "./index.scss";
import "./fonts.scss";

/**
 * Write a hook that fetches the data from our earthquakes endpoint.
 * and returns that data.
 *
 * React Docs on Hooks: https://reactjs.org/docs/hooks-intro.html
 */
const api =
  "https://cors-anywhere.herokuapp.com/http://interviewtest.getguru.com/seismic/data.json";
function useEarthquakes() {}

/**
 * Please use the two component files provided so the tests work properly!
 */
function EarthquakeApp() {
  return (
    <div className="Earthquakes">
      {/*
       Feel free to comment <Assignment> out because it's probably blocking your view.

       If you want to see the assignment  again, just uncomment it!

       The assignment is always available in README.md.
      */}
      <Assignment />

      {/* You should leave this though. */}
      <table>
        {/* <TableHeader /> goes here */}
        <tbody>{/* <TableRow />s go here, one for each earthquake */}</tbody>
      </table>
    </div>
  );
}

const container = document.getElementById("root");
if (container) {
  ReactDOM.render(<EarthquakeApp />, container);
}
