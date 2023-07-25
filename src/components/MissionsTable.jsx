import { useSelector } from 'react-redux';
import MissionItem from './MissionItem';

const MissionsTable = () => {
  const { missions, isLoading, error } = useSelector((state) => state.missions);

  if (error) {
    return (
      <div className="error-message">
        <h2>{error}</h2>
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className="loading-message">
        <h2>Loading...</h2>
      </div>
    );
  }

  return (
    <table className="missions-table">
      <thead>
        <tr>
          <th>Mission</th>
          <th>Description</th>
          <th>Status</th>
          <th>{' '}</th>
        </tr>
      </thead>
      <tbody>
        {missions.map((mission) => (<MissionItem key={mission.mission_id} mission={mission} />))}
      </tbody>
    </table>
  );
};

export default MissionsTable;
