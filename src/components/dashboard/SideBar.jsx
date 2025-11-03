import { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useNavigate } from 'react-router-dom';
function SideBar({ aboutMeRef, homeRef, isOpen, setIsOpen }) {
    const navigate = useNavigate();
    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    const closeSidebar = () => {
        setIsOpen(false);
    };
    const scrollToRef = (ref, page) => {
        console.log("scrolled to ref", page);
        if (ref.current) {
            ref.current.scrollIntoView({ behavior: 'smooth' });
        }
        switch (page) {
            case "home":
                navigate('/');
                break;
            case "about":
                navigate('/#aboutme', { state: { targetSection: 'aboutMeRef' } }); {/* Work in progress */ }
                break;
            default:
                break;
        }
    }

    return (
        <>
            {/* Hamburger Menu Icon - Now visible on ALL screen sizes */}
            <button
                onClick={toggleSidebar}
                className="text-border-color/90 fixed z-50 cursor-pointer p-5 rounded-lg hover:bg-smoke/10 transition-colors"
                aria-label="Toggle sidebar">
                <MenuIcon fontSize="large" />
            </button>

            {/* Sidebar */}
            <aside
                className={`backdrop-blur-lg bg-smoke/20 p-4 rounded-2xl shadow-2xl border border-border-color w-40 h-170 fixed left-5 top-20 z-40 transition-all duration-300 ease-in-out ${isOpen
                    ? 'translate-x-0 opacity-100'
                    : '-translate-x-[280px] opacity-0'
                    }`}
            >
                {/* Close/Back Button - Now visible on ALL screen sizes */}
                <div className="flex items-center justify-between mb-4">
                    <h3 className="text-text-main/90 font-light">Menu</h3>
                    <button
                        onClick={closeSidebar}
                        className="p-2 rounded-lg hover:bg-smoke/10 transition-colors text-smoke/90"
                        aria-label="Close sidebar"
                    >
                        <ArrowBackIcon />
                    </button>
                </div>

                {/* Sidebar Content */}

                <div className="flex flex-row items-center">
                    <nav className="space-y-8 ">
                        <button className="block px-4 py-2 rounded-lg text-smoke/80 dark:text-black hover:text-text-main hover:bg-smoke/10 transition-colors" onClick={() => { scrollToRef(homeRef, "home") }}>
                            Home
                        </button>
                        <button className="block px-4 py-2 rounded-lg text-smoke/80 dark:text-black  hover:text-text-main hover:bg-smoke/10 transition-colors"
                            onClick={() => navigate('/dashboard')}
                        >
                            DashBoard
                        </button>
                        <button className="block px-4 py-2 rounded-lg text-smoke/80 dark:text-black hover:text-text-main hover:bg-smoke/10 transition-colors"
                            onClick={() => scrollToRef(aboutMeRef, "about")}>
                            About Me
                        </button>
                    </nav>
                </div>

            </aside>
        </>
    );
}

export default SideBar;
