import { useState } from 'react';
import Background from '../components/common/Background';
import NavBar from '../components/common/NavBar';
import SideBar from '../components/dashboard/SideBar';
import MainContent from '../components/dashboard/MainContent';
import ChatArea from '../components/dashboard/ChatArea';

function DashBoard({aboutMeRef, homeRef}) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isChatOpen, setIsChatOpen] = useState(false);

  return (
    <>
      <Background />
      <NavBar aboutMeRef={aboutMeRef} homeRef={homeRef} />
      
      <div className="flex min-h-screen"> {/* pt-16 for navbar space */}
        <SideBar 
          aboutMeRef={aboutMeRef} 
          homeRef={homeRef}
          isOpen={isSidebarOpen}
          setIsOpen={setIsSidebarOpen}
        />
        
        <MainContent 
          isSidebarOpen={isSidebarOpen}
          isChatOpen={isChatOpen}
        />
        
        <ChatArea 
          isOpen={isChatOpen}
          setIsOpen={setIsChatOpen}
        />
      </div>
    </>
  )
}

export default DashBoard;
