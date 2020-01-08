import React from "react";
import ReactDOM from "react-dom";

import TableRow from "./components/TableRow/TableRow";
import TableHeader from "./components/TableHeader/TableHeader";
import SearchField from "./components/SearchField/SearchField";
import useOrganizedEarthquakes from "./hooks/useOrganizedEarthquakes";

import "./index.scss";
import "./fonts.scss";

function EarthquakeApp() {
  const {
    earthquakes,
    loading,
    error,
    handleChange,
  } = useOrganizedEarthquakes();

  if (loading) return <h2>Loading...</h2>;
  if (error) console.log(JSON.stringify(error));

  return (
    <>
      <SearchField handleChange={handleChange} />
      <div className="Earthquakes">
        <table>
          <TableHeader />
          <tbody>
            {earthquakes.map(earthquake => (
              <TableRow key={earthquake.id} {...earthquake} />
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

const container = document.getElementById("root");
if (container) {
  ReactDOM.render(<EarthquakeApp />, container);
}
