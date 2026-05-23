import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import "./App.css";
import { appRoutes } from "./routes";

export default function AppShell() {
  return (
    <div className="app">
      <header className="header border-b border-gray-200 dark:border-gray-700 bg-white dark:bg-[#1a1b26] top-0 z-50 transition-colors duration-300">
        <NavBar />
      </header>
      <main className="main min-h-screen flex flex-col duration-300 ">
        <Suspense
          fallback={
            <div className="p-6 text-center text-gray-600 dark:text-gray-400">
              Loading…
            </div>
          }
        >
          <Routes>
            {appRoutes.map((route) => (
              <Route
                key={route.path}
                path={route.path}
                element={route.element}
              />
            ))}
          </Routes>
        </Suspense>
      </main>
    </div>
  );
}
