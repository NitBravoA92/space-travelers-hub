import Layout from './Layout';
import JoinedMissions from '../components/JoinedMissions';
import ReservedRockets from '../components/ReservedRockets';
import '../assets/styles/MyProfile.css';

const MyProfile = () => (
  <Layout>
    <section id="myProfile">
      <div className="container">
        <div className="services-content">
          <JoinedMissions />
          <ReservedRockets />
        </div>
      </div>
    </section>
  </Layout>
);

export default MyProfile;
