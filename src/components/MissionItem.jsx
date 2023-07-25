import PropTypes from 'prop-types';

const MissionItem = ({ mission }) => (
  <tr>
    <td className="mission-name">{ mission.mission_name }</td>
    <td className="mission-description">{ mission.description}</td>
    <td className="mission-status">
      <span className="badge badge-gray">Not a member</span>
    </td>
    <td className="mission-join-button">
      <button type="button" className="btn btn-gray">Join Mission</button>
    </td>
  </tr>
);

MissionItem.propTypes = {
  mission: PropTypes.shape({
    mission_id: PropTypes.string.isRequired,
    mission_name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
};

export default MissionItem;
