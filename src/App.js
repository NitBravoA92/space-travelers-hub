import { Routes, Route } from 'react-router-dom';
import Rockets from './views/Rockets';
import MyProfile from './views/MyProfile';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Rockets />} />
      <Route path="rockets" element={<Rockets />} />
      <Route path="my-profile" element={<MyProfile />} />
    </Routes>
  );
}

export default App;
