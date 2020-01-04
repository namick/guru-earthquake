import React from "react";
import axios from "axios";

/**
 * Write a hook that fetches the data from our earthquakes endpoint.
 * and returns that data.
 *
 * React Docs on Hooks: https://reactjs.org/docs/hooks-intro.html
 */
const cors = "https://cors-anywhere.herokuapp.com/";
const api = "http://interviewtest.getguru.com/seismic/data.json";

export default function useEarthquakes() {
  const [earthquakes, setEarthquakes] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(false);

  React.useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        const response = await axios.get(cors + api);
        if (response.status === 200) {
          setEarthquakes(response.data);
        }
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  return { earthquakes, loading, error };
}
