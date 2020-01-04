import React from "react";

import "./TableHeader.scss";

export default function TableHeader() {
  return (
    <thead className="TableHeader">
      <tr>
        <th>ID</th>
        <th>Time</th>
        <th>Location</th>
        <th>Magnitude</th>
        <th>More</th>
      </tr>
    </thead>
  );
}
