import TypewriterComponent from 'typewriter-effect';
import NavBar from '../common/NavBar.jsx';
import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';

const RESUME_URL = "https://resume-pdf-rajeshvelraj.s3.ap-south-2.amazonaws.com/RajeshKumar_FSD.pdf";

function HeroSection( {homeRef} ) {
    const navigate = useNavigate();
    return (<>
        {/* Content with glassmorphism */}
        <div className="relative min-h-screen">
            <section ref={homeRef} className="h-screen flex flex-col items-center justify-center p-8 gap-6">
                {/* Main glass card */}
                <div className="backdrop-blur-lg dark:bg-smoke/20 dark:border-2 p-12 rounded-3xl shadow-2xl border border-border-color/40 max-w-4xl w-full">
                    <h1 className="text-5xl font-light text-smoke/90 mb-6">
                        <TypewriterComponent
                            options={{
                                strings: ['Welcome to UIcraft AI'],
                                autoStart: true,
                                loop: true,
                                cursor: '',
                                delay: 75,
                                deleteSpeed: 50,
                            }}
                        />
                    </h1>
                    <p className="text-smoke/40 dark:text-gray-700 text-xl leading-relaxed mb-6">
                        Harness the power of AI to build, customize, and deploy stunning interfaces faster than ever before.
                    </p>
                    <button className="backdrop-blur-md px-4 py-2 rounded-full text-smoke font-semibold border border-border-color hover:bg-border-color/80 animate-bounce transition-all" onClick={() => {navigate('/dashboard')}}>
                        Get Started
                    </button>
                </div>
                <div className="mt-8 flex justify-center">
          <button 
            className="backdrop-blur-md px-6 py-3 rounded-full text-smoke font-semibold border border-border-color bg-linear-to-r from-teal-500/20 to-purple-500/20 hover:from-teal-500/30 hover:to-purple-500/30 transition-all transform hover:scale-105" 
            onClick={() => { window.open(RESUME_URL, '_blank'); }}
          >
            View Full Resume →
          </button>
        </div>

                {/* Secondary glass element 
                <div className="backdrop-blur-lg bg-smoke/20 p-6 rounded-2xl shadow-2xl border border-border-color max-w-md w-full">
                    <p className="text-smoke/90 text-center">
                        Additional content with glass effect
                    </p>
                </div>*/}
            </section>
        </div></>
    )
}

export default HeroSection;