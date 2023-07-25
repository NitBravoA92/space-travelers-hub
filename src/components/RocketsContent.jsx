import { useSelector } from 'react-redux';
import RocketItem from './RocketItem';

const RocketsContent = () => {
  const { rockets, isLoading, error } = useSelector((state) => state.rockets);

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
        <h2>Loading Rockets...</h2>
      </div>
    );
  }

  return (
    <div className="rockets-list">
      { rockets.map((rocket) => (
        <RocketItem key={rocket.id} rocket={rocket} />
      ))}
    </div>
  );
};

export default RocketsContent;
