import { useSelector } from 'react-redux';
import ReservationItem from './ReservationItem';

const ReservedRockets = () => {
  const { rockets } = useSelector((state) => state.rockets);

  return (
    <div className="my-rockets service">
      <h2>My Rockets</h2>
      <ul id="reserved-rockets" className="reservation-list">
        {rockets
          .filter((rocket) => rocket.reserved === true)
          .map((rocket) => (
            <ReservationItem key={rocket.id} serviceName={rocket.name} />
          ))}
      </ul>
    </div>
  );
};

export default ReservedRockets;
