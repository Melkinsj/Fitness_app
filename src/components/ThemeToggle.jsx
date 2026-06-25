import "./ThemeToggle.css";
export default function ThemeToggle({
  darkMode,
  setDarkMode,
}) {
  const toggleTheme = () => {
    const newValue = !darkMode;

    setDarkMode(newValue);

    localStorage.setItem(
      "darkMode",
      newValue
    );

    if (newValue) {
      document.body.classList.add(
        "dark-mode"
      );
    } else {
      document.body.classList.remove(
        "dark-mode"
      );
    }
  };

  return (
    <button
      className="theme-btn"
      onClick={toggleTheme}
    >
      {darkMode
        ? "☀ Light Mode"
        : "🌙 Dark Mode"}
    </button>
  );
}