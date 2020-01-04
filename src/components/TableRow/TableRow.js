import React from "react";
import PropTypes from "prop-types";
import Moment from "moment";

import "./TableRow.scss";

export default function TableRow({ id, time, place, mag }) {
  return (
    <tr className="TableRow">
      <td>{id}</td>
      <td>{formatTime(time)}</td>
      <td>{place}</td>
      <td>{mag}</td>
    </tr>
  );
}

TableRow.propTypes = {
  id: PropTypes.string,
  time: PropTypes.string,
  place: PropTypes.string,
  mag: PropTypes.number,
  longitude: PropTypes.number,
  latitude: PropTypes.number,
};

TableRow.defaultProps = {
  id: "",
  time: "",
  place: "",
  mag: 0,
  longitude: 0,
  latitude: 0,
};

function formatTime(time) {
  return Moment.utc(time).format("MMMM DD, YYYY @ HH:mm")
}