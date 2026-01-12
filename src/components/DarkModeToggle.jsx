import { useTheme } from '../contexts/ThemeContext';
import MoonIcon from '../assets/images/moon.svg?react';
import SunIcon from '../assets/images/sun.svg?react';

export default function DarkModeToggle() {
  const { isDarkMode, toggleTheme } = useTheme();
  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
      className="border border-gray-300 rounded-xl p-2 hover:bg-gray-100 dark:hover:bg-gray-800"
    >
      {isDarkMode ? (
        <MoonIcon className="w-6 h-6 text-gray-700 fill-current" />
      ) : (
        <SunIcon className="w-6 h-6 text-yellow-500 fill-current" />
      )}
    </button>
  );
}
