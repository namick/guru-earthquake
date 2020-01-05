import React from "react";
import PropTypes from "prop-types";
import Moment from "moment";

import TableRowDetail from './TableRowDetail'

import "./TableRow.scss";

export default function TableRow({
  id,
  time,
  place,
  mag,
  longitude,
  latitude,
}) {
  const [hidden, setHidden] = React.useState(true);
  const handleClick = () => setHidden(toggle => !toggle);

  return (
    <>
      <tr className="TableRow">
        <td>{id}</td>
        <td>{formatTime(time)}</td>
        <td>{place}</td>
        <td>{mag}</td>
        <td>
          <button onClick={handleClick}>Details</button>
        </td>
      </tr>
      <TableRowDetail longitude={longitude} latitude={latitude} hidden={hidden} />
    </>
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
  return Moment.utc(time).format("MMMM DD, YYYY @ HH:mm");
}
