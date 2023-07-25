import { useSelector } from 'react-redux';
import ReservationItem from './ReservationItem';

const JoinedMissions = () => {
  const { missions } = useSelector((state) => state.missions);

  return (
    <div className="my-missions service">
      <h2>My Missions</h2>
      <ul id="reserved-missions" className="reservation-list">
        {missions
          .filter((mission) => mission.reserved === true)
          .map((mission) => (
            <ReservationItem
              key={mission.mission_id}
              serviceName={mission.mission_name}
            />
          ))}
      </ul>
    </div>
  );
};

export default JoinedMissions;
