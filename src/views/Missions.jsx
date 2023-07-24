import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getAllMissions } from '../redux/missions/missionsSlice';
import Layout from './Layout';

const Missions = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllMissions());
  }, []);

  return (
    <Layout>
      <section id="missions" />
    </Layout>
  );
};

export default Missions;
