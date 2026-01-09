import { useTheme } from '../contexts/ThemeContext';
import sunIcon from '../assets/images/sun.svg';
import moonIcon from '../assets/images/moon.svg';

export default function DarkModeToggle() {
  const { isDarkMode, toggleTheme } = useTheme();
  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
      className="border border-gray-300 rounded-xl p-2 hover:bg-gray-100 dark:hover:bg-gray-800"
    >
      <img
        src={isDarkMode ? moonIcon : sunIcon}
        alt="Toggle Theme"
        className="w-5 h-5 "
      />
    </button>
  );
}
