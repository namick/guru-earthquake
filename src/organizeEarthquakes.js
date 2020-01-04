/**
 * This function should take in earthquake data/current search and returns the sorted, filtered, and sliced list per the assignment
 */
export default function organizeEarthquakes(search, earthquakes) {
  const filteredEarthquakes = earthquakes.filter(earthquake =>
    earthquake.place.toLowerCase().includes(search.toLowerCase())
  );

  return sortByMagnitudeThenTime(filteredEarthquakes).slice(0, 20);
}

function sortByMagnitudeThenTime(earthquakes) {
  return earthquakes.sort((a, b) => {
    if (a.mag === b.mag) {
      if (new Date(a.time) < new Date(b.time)) return 1;
      if (new Date(a.time) > new Date(b.time)) return -1;
      return 0;
    }
    return b.mag - a.mag;
  });
}