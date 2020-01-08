import React from "react";
import PropTypes from "prop-types";
import Moment from "moment";

import TableRowDetail from "./TableRowDetail";

import downIcon from "./down.png";
import upIcon from "./up.png";
import "./TableRow.scss";

const useShowDetails = () => {
  const [hidden, setHidden] = React.useState(true);
  const handleClick = () => setHidden(toggle => !toggle);
  const klass = hidden ? "DetailShow" : "DetailHide";
  const icon = hidden ? downIcon : upIcon;

  return { hidden, handleClick, klass, icon };
};

const formatTime = time => Moment.utc(time).format("MMMM D, YYYY @ HH:mm");

export default function TableRow({
  id,
  time,
  place,
  mag,
  longitude,
  latitude,
}) {
  const { hidden, handleClick, klass, icon } = useShowDetails();

  return (
    <>
      <tr className="TableRow">
        <td>{id}</td>
        <td>{formatTime(time)}</td>
        <td>{place}</td>
        <td>{mag}</td>
        <td className={klass}>
          <button onClick={handleClick}>
            Details
            <img src={icon} alt="" />
          </button>
        </td>
      </tr>
      <TableRowDetail
        longitude={longitude}
        latitude={latitude}
        hidden={hidden}
      />
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
