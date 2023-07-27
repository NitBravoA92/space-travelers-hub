import { Routes, Route } from 'react-router-dom';
import Rockets from './views/Rockets';
import Missions from './views/Missions';
import MyProfile from './views/MyProfile';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Rockets />} />
      <Route path="rockets" element={<Rockets />} />
      <Route path="missions" element={<Missions />} />
      <Route path="my-profile" element={<MyProfile />} />
    </Routes>
  );
}

export default App;
