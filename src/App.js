import { Routes, Route } from 'react-router-dom';
import MyProfile from './views/MyProfile';

function App() {
  return (
    <Routes>
      <Route path="my-profile" element={<MyProfile />} />
    </Routes>
  );
}

export default App;
