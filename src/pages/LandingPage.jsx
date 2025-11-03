
import NavBar from '../components/common/NavBar.jsx'
import HeroSection from '../components/landing/HeroSection'
import AboutMe from '../components/landing/AboutMe.jsx'
import Background from '../components/common/Background.jsx';

function LandingPage({aboutMeRef, homeRef}) {
  
  return (
    <>
    <Background />
      <NavBar aboutMeRef={aboutMeRef} homeRef={homeRef} />
      <HeroSection homeRef={homeRef} />
      <AboutMe aboutMeRef={aboutMeRef} />
    </>
  )
}

export default LandingPage;