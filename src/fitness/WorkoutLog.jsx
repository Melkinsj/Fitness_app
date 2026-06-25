import { useState } from "react";

export default function WorkoutLog() {
  const [workout, setWorkout] = useState("");
  const [workouts, setWorkouts] = useState([]);

  const addWorkout = () => {
    if (!workout.trim()) return;

    setWorkouts([
      ...workouts,
      workout,
    ]);

    setWorkout("");
  };

  return (
    <div className="card">
      <h2>🏋️ Workout Log</h2>

      <div className="input-row">
        <input
          type="text"
          placeholder="Workout Name"
          value={workout}
          onChange={(e) =>
            setWorkout(e.target.value)
          }
        />

        <button onClick={addWorkout}>
          Add
        </button>
      </div>

      <ul>
        {workouts.map((item, index) => (
          <li key={index}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}