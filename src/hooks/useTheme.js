import {useState, useEffect} from 'react';

export function useTheme() {
    // Initialize from localStorage (or system) once
    const [theme, setTheme] = useState(() => {
      const saved = localStorage.getItem('theme');
      if (saved === 'light' || saved === 'dark' || saved === 'system') {
        return saved;
      }
      return 'system';
    });

    useEffect(() => {
        const root = document.documentElement; // HTML
        const applyTheme = (value) => {
            if (value === 'light') {
                root.classList.remove('dark');
            } else if (value === 'dark') {
                root.classList.add('dark');
            } else {
                // 'system' - follow OS preference
                const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                if (prefersDark) {
                    root.classList.add('dark');
                } else {
                    root.classList.remove('dark');
                }
            }
        };

        applyTheme(theme);
        localStorage.setItem('theme', theme);
    }, [theme]);

    return { theme, setTheme };
}