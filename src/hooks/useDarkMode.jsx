import { useEffect, useState } from "react";

export const useDarkMode = () => {
  // Esto para que tome la configuracion de windows en caso de usar modo oscuro o claro
  const [theme, setTheme] = useState(() => {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      return "dark";
    } else {
      return "light";
    }
  });

  useEffect(() => {
    if (theme === "dark") {
      document.querySelector("html").classList.add("dark");
    } else {
      document.querySelector("html").classList.remove("dark");
    }
  }, [theme]);

  const handlerTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return { handlerTheme };
};
