import React from "react";
import PropTypes from "prop-types";

export default function TableRowDetail({ longitude, latitude, hidden }) {
  if (hidden) return null;

  return (
    <tr className="TableRowDetail">
      <td colSpan="5">
        <span>Longitude: {longitude}</span>
        <span>Latitude: {latitude}</span>
      </td>
    </tr>
  );
}

TableRowDetail.propTypes = {
  longitude: PropTypes.number,
  latitude: PropTypes.number,
  hidden: PropTypes.bool,
};

TableRowDetail.defaultProps = {
  longitude: 0,
  latitude: 0,
  hidden: true,
};
