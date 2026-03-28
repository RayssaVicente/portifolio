import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";
import { cn } from "../lib/utils";

export const ThemeToggle = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    useEffect(() => {
        const storedTheme = localStorage.getItem("theme");
        if (storedTheme === "dark") {
            setIsDarkMode(true);
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark"); // Garante que remova se for light
            setIsDarkMode(false);
        }
    }, []);

    const toggleTheme = () => {
        if (isDarkMode) {
            document.documentElement.classList.remove('dark');
            localStorage.setItem("theme", "light");
            setIsDarkMode(false);
        } else {
            document.documentElement.classList.add('dark');
            localStorage.setItem("theme", "dark");
            setIsDarkMode(true);
        }
    }

    return (
        <button 
            onClick={toggleTheme} 
            // REMOVI: fixed, max-sm:hidden, top-5, right-5
            className={cn(
                "p-2 rounded-full transition-colors duration-300 z-50 hover:bg-accent",
                "focus:outline-none"
            )}
            aria-label="Toggle Theme"
        >
            {isDarkMode ? 
                <Sun className="h-6 w-6 text-yellow-300" /> : 
                <Moon className="h-6 w-6 text-blue-900 dark:text-blue-400" />
            }
        </button>
    );
};