import {Routes, Route} from 'react-router-dom';
import LandingPage from './pages/LandingPage.jsx';
import DashBoard from './pages/DashBoard.jsx';
import {useRef} from 'react'
  
function App() {
 const aboutMeRef = useRef(null);
  const homeRef = useRef(null);

  return (
    <Routes>
      <Route path="/" element={<LandingPage aboutMeRef={aboutMeRef} homeRef={homeRef} />} />
      <Route path="/dashboard" element={<DashBoard aboutMeRef={aboutMeRef} homeRef={homeRef} />} />
    </Routes>
  );
}
export default App;
      