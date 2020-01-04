import React from "react";
import ReactDOM from "react-dom";

import Assignment from "./Assignment";
import organizeEarthquakes from "./organizeEarthquakes";
import TableRow from "./components/TableRow/TableRow";
import TableHeader from "./components/TableHeader/TableHeader";

import "./index.scss";
import "./fonts.scss";

function EarthquakeApp() {
  return (
    <div className="Earthquakes">
      <table>
        <tbody>{/* <TableRow />s go here, one for each earthquake */}</tbody>
      </table>
    </div>
  );
}

const container = document.getElementById("root");
if (container) {
  ReactDOM.render(<EarthquakeApp />, container);
}
