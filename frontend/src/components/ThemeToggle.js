import React, { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [dark, setDark] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });

  useEffect(() => {
    const root = document.documentElement;
    if (dark) {
      root.setAttribute("data-theme", "dark");
    } else {
      root.removeAttribute("data-theme");
    }
    localStorage.setItem("theme", dark ? "dark" : "light");
  }, [dark]);

  return (
    <button
      onClick={() => setDark((d) => !d)}
      style={{
        padding: "6px 10px",
        borderRadius: "8px",
        border: "1px solid #ccc",
        cursor: "pointer",
        background: dark ? "#333" : "#eee",
        color: dark ? "white" : "black",
      }}
    >
      {dark ? "Light Mode" : "Dark Mode"}
    </button>
  );
}
