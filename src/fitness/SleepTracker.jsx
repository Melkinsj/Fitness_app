import { useState } from "react";

export default function SleepTracker() {
  const [hours, setHours] = useState("");

  return (
    <div className="card">
      <h2>😴 Sleep Tracker</h2>

      <input
        type="number"
        placeholder="Hours Slept"
        value={hours}
        onChange={(e) => setHours(e.target.value)}
      />

      {hours && (
        <h3>{hours} Hours Slept</h3>
      )}
    </div>
  );
}