import { useNavigate } from 'react-router-dom';
import ThemeButton from '../theme/ThemeButton.jsx';

function NavBar({ aboutMeRef, homeRef }) {
  const navigate = useNavigate();

  const scrollToRef = (ref,page) => {
      console.log("scrolled to ref", page);

    if (ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth' });
    }
    switch(page){
      case "home":
        navigate('/');
        break;
      case "about":
        navigate('/#aboutme');{/* Work in progress */}
        break;
      default:
        break;    
    }
  }
  return (
     <nav className="fixed top-0 left-0 w-full p-3 flex justify-around items-center z-50 ">
        <div className="text-text-main text-2xl font-bold cursor-pointer" onClick={() => navigate('/') }>
          UIcraft AI
        </div>
        <div className="hidden md:block backdrop-blur-lg dark:bg-smoke/20 p-3 rounded-full shadow-2xl border border-border-color max-w-md w-full ">
          <div className="flex gap-1 items-center justify-evenly">
            <button className="text-smoke/80 dark:text-black hover:text-text-main transition-colors" onClick={() => { scrollToRef(homeRef,"home") }}>
              Home
            </button>
            <button className="text-smoke/80 dark:text-black  hover:text-text-main transition-colors"
            onClick={()=>navigate('/dashboard')}
            >
              DashBoard
            </button>
            <button className="text-smoke/80 dark:text-black hover:text-text-main transition-colors"
              onClick={() => scrollToRef(aboutMeRef,"about")}>
              About Me
            </button>
          </div>

        </div>
        <ThemeButton />

      </nav>
  )
}

export default NavBar