import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { addReserve } from '../redux/rockets/rocketsSlice';

const RocketItem = ({ rocket }) => {
  const dispatch = useDispatch();
  const handleClickAddReserve = () => {
    dispatch(addReserve(rocket.id));
  };

  return (
    <div className="rocket-item">
      <div className="rocket-image">
        <img src={rocket.image} alt={rocket.name} />
      </div>
      <div className="rocket-details">
        <h2 className="title">{rocket.name}</h2>
        <p className="description">
          {rocket.description}
        </p>
        <div className="reserve">
          <button type="button" className="btn btn-blue" onClick={handleClickAddReserve}>Reserve Rocket</button>
        </div>
      </div>
    </div>
  );
};

RocketItem.propTypes = {
  rocket: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    reserved: PropTypes.bool,
  }).isRequired,
};

export default RocketItem;
