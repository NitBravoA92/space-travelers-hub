import PropTypes from 'prop-types';

const ReservationItem = ({ serviceName }) => (
  <li className="reservation-item">
    {serviceName}
  </li>
);

ReservationItem.propTypes = {
  serviceName: PropTypes.string.isRequired,
};

export default ReservationItem;
