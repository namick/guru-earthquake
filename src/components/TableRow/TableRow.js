import React from "react";
import PropTypes from "prop-types";
import Moment from "moment";

import "./TableRow.scss";

export default function TableRow() {
  return <tr className="TableRow" />;
}

TableRow.propTypes = {
  id: PropTypes.string,
  time: PropTypes.string,
  place: PropTypes.string,
  mag: PropTypes.number,
  longitude: PropTypes.number,
  latitude: PropTypes.number
};

TableRow.defaultProps = {
  id: "",
  time: "",
  place: "",
  mag: 0,
  longitude: 0,
  latitude: 0
};
