import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

const ThemeToggle = () => {
  const { isDark, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="relative p-2 rounded-lg bg-primary hover:bg-secondary transition-all duration-300 hover:scale-110 shadow-lg hover:shadow-xl group"
      aria-label="Toggle theme"
    >
      <div className="relative w-6 h-6">
        {/* Sun icon */}
        <Sun
          className={`absolute inset-0 w-6 h-6 text-white transition-all duration-300 ${
            isDark ? 'opacity-0 rotate-180' : 'opacity-100 rotate-0'
          }`}
        />
        {/* Moon icon */}
        <Moon
          className={`absolute inset-0 w-6 h-6 text-white transition-all duration-300 ${
            isDark ? 'opacity-100 rotate-0' : 'opacity-0 -rotate-180'
          }`}
        />
      </div>
      {/* Tooltip */}
      <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-dark-card text-dark-text px-2 py-1 rounded text-xs whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
        {isDark ? 'Light mode' : 'Dark mode'}
      </span>
    </button>
  );
};

export default ThemeToggle;
