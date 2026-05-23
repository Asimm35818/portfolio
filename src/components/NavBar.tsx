import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import Styles from "./NavBar.module.css";

const NavBar: React.FC = () => {
  const [isDark, setIsDark] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDark);
    document.body.classList.toggle("dark", isDark);
  }, [isDark]);

  const toggleTheme = () => {
    const root = document.documentElement;
    const body = document.body;
    const nextDark = !root.classList.contains("dark");

    root.classList.toggle("dark", nextDark);
    body.classList.toggle("dark", nextDark);
    setIsDark(nextDark);
    localStorage.setItem("theme", nextDark ? "dark" : "light");
  };

  return (
    <div className={`${Styles.navBar} relative w-full`}>
      <NavLink
        to="/"
        className={({ isActive }) =>
          `${Styles.brandLink} ${isActive ? Styles.active : ""} transition-transform duration-300 ease-in-out hover:scale-105`
        }
        end
      >
        <div className={`${Styles.titleBox} font-semibold whitespace-nowrap`}>
          <h1 className="font-semibold text-3xl sm:text-4xl md:text-5xl">
            @Asim-M
          </h1>
        </div>
      </NavLink>

      <div
        className={`${Styles.navPages} flex items-center gap-2 sm:gap-4 text-base sm:text-lg md:text-xl ml-auto`}
      >
        <NavLink
          to="/"
          className={({ isActive }) =>
            `${Styles.navButton} ${isActive ? Styles.active : ""}`
          }
          end
        >
          Home
        </NavLink>
        <NavLink
          to="/projects"
          className={({ isActive }) =>
            `${Styles.navButton} ${isActive ? Styles.active : ""}`
          }
        >
          Projects
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            `${Styles.navButton} ${isActive ? Styles.active : ""}`
          }
        >
          About
        </NavLink>
        <NavLink
          to="/blog"
          className={({ isActive }) =>
            `${Styles.navButton} ${isActive ? Styles.active : ""}`
          }
        >
          Blog
        </NavLink>
        <button
          type="button"
          onClick={toggleTheme}
          className="cursor-pointer p-2 rounded-lg border border-gray-200 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
          aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
        >
          <svg
            xmlns="http://w3.org"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-moon text-gray-600 dark:text-gray-300"
          >
            <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default NavBar;
