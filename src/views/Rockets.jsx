import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getAllRockets } from '../redux/rockets/rocketsSlice';
import Layout from './Layout';
import RocketsContent from '../components/RocketsContent';
import '../assets/styles/Rocket.css';

const Rockets = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllRockets());
  }, []);

  return (
    <Layout>
      <section id="rockets">
        <div className="container">
          <RocketsContent />
        </div>
      </section>
    </Layout>
  );
};

export default Rockets;
