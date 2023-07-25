import PropTypes from 'prop-types';

const RocketItem = ({ rocket }) => (
  <div className="rocket-item">
    <div className="rocket-image">
      <img src={rocket.image} alt={rocket.name} />
    </div>
    <div className="rocket-details">
      <h2 className="title">{rocket.name}</h2>
      <p className="description">{rocket.description}</p>
      <div className="reserve">
        <button type="button" className="btn btn-blue">Reserve Rocket</button>
      </div>
    </div>
  </div>
);

RocketItem.propTypes = {
  rocket: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
  }).isRequired,
};

export default RocketItem;
