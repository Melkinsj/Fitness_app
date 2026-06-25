import { useState } from "react";

export default function Settings() {
  const [darkMode, setDarkMode] =
    useState(false);

  return (
    <div className="card">
      <h1>Settings</h1>

      <div className="setting-row">
        <span>Dark Mode</span>

        <input
          type="checkbox"
          checked={darkMode}
          onChange={() =>
            setDarkMode(!darkMode)
          }
        />
      </div>

      <div className="setting-row">
        <span>Notifications</span>

        <input
          type="checkbox"
          defaultChecked
        />
      </div>

      <button>
        Export Fitness Data
      </button>
    </div>
  );
}