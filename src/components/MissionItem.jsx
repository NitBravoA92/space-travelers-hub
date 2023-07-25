import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { addReservedMission, LeaveMission } from '../redux/missions/missionsSlice';

const MissionItem = ({ mission }) => {
  const dispatch = useDispatch();
  const handleClickAddReservedMission = () => {
    dispatch(addReservedMission(mission.mission_id));
  };

  const handleClickLeaveMission = () => {
    dispatch(LeaveMission(mission.mission_id));
  };

  return (
    <tr>
      <td className="mission-name">{ mission.mission_name }</td>
      <td className="mission-description">{ mission.description}</td>
      <td className="mission-status">
        <span className="badge badge-gray">Not a member</span>
      </td>
      <td className="mission-join-button">
        <button type="button" className="btn btn-gray" onClick={handleClickAddReservedMission}>Join Mission</button>
        <button type="button" className="btn btn-pink" onClick={handleClickLeaveMission}>Leave Mission</button>
      </td>
    </tr>
  );
};

MissionItem.propTypes = {
  mission: PropTypes.shape({
    mission_id: PropTypes.string.isRequired,
    mission_name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    reserved: PropTypes.bool,
  }).isRequired,
};

export default MissionItem;
