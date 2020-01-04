import React from "react";

import "./TableHeader.scss";

export default function TableHeader() {
  return (
    <thead className="TableHeader">
      <tr><th>ID</th></tr>
      <tr><th>Time</th></tr>
      <tr><th>Location</th></tr>
      <tr><th>Magnitude</th></tr>
      <tr><th>More</th></tr>
    </thead>
  );
}
