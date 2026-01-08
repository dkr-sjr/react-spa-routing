import useThemeStore from '../store/useThemeStore';
import sunIcon from '../assets/images/sun.svg';
import moonIcon from '../assets/images/moon.svg';

export default function DarkModeToggle() {
  const { isDarkMode, toggleTheme } = useThemeStore();

  return (
    <button type="button" onClick={toggleTheme} className="border border-gray-300 rounded-xl p-2">
      <img
        src={isDarkMode ? moonIcon : sunIcon}
        alt="Toggle Theme"
        className="w-5 h-5 "
      />
    </button>
  );
}
