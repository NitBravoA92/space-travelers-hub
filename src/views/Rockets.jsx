import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getAllRockets } from '../redux/rockets/rocketsSlice';
import Layout from './Layout';

const Rockets = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllRockets());
  }, []);

  return (
    <Layout>
      <section id="rockets" />
    </Layout>
  );
};

export default Rockets;
