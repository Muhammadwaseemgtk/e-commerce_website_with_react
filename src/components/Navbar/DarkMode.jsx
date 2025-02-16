import React, { useState, useEffect } from "react";
import { MdFlashlightOn } from "react-icons/md";
import { MdFlashlightOff } from "react-icons/md";

const DarkMode = () => {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
  );
  const element = document.documentElement;

  useEffect(() => {
    if (theme === "dark") {
      element.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      element.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [theme]);
  return (
    <div className="relative">
      <MdFlashlightOn
        className={`w-12 cursor-pointer text-2xl
        drop-shadow-[1px_1px_1px_rgba(0,0,0,0.1)]
        transition-all duration-300
        absolute right-0 z-10 ${
          theme === "light" ? "opacity-0" : "opacity-100"
        } `}
        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      />
      <MdFlashlightOff
        className={`w-12 cursor-pointer text-2xl
        drop-shadow-[1px_1px_1px_rgba(0,0,0,0.1)]
        transition-all duration-300 ${
          theme === "dark" ? "opacity-0" : "opacity-100"
        } `}
        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      />
    </div>
  );
};

export default DarkMode;
