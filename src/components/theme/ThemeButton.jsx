import SunSvg from '../theme/svg/SunSvg.jsx'
import MoonSvg from '../theme/svg/MoonSvg.jsx'
import { useTheme } from '../../context/ThemeContext.jsx'

function ThemeButton() {
    const { theme, toggleTheme } = useTheme()

    return (
        <button
            onClick={toggleTheme}
            className="backdrop-blur-lg bg-white/10 dark:bg-black/20 p-3 rounded-full shadow-2xl border border-border-color dark:border-gray-400/30 hover:bg-white/20 dark:hover:bg-black/30 transition-all duration-300"
            aria-label="Toggle theme"
        >
            {theme === 'dark' ? (<MoonSvg />) : (<SunSvg />)}
        </button>
    )
}

export default ThemeButton