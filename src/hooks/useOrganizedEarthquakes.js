import React from "react";

import useEarthquakes from "./useEarthquakes";
import organizeEarthquakes from "../organizeEarthquakes";

export default function useOrganizedEarthquakes() {
  const { earthquakes, loading, error } = useEarthquakes();
  const [search, setSearch] = React.useState("");

  const handleChange = event => {
    setSearch(event.target.value);
  };

  return {
    earthquakes: organizeEarthquakes(search, earthquakes),
    loading,
    error,
    handleChange,
  };
}
