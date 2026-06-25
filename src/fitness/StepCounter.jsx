import { useState } from "react";

export default function StepCounter() {
  const [steps, setSteps] = useState(0);

  return (
    <div className="card">
      <h2>🚶 Step Counter</h2>

      <h1>{steps}</h1>

      <button
        onClick={() =>
          setSteps(steps + 100)
        }
      >
        +100 Steps
      </button>

      <button
        onClick={() => setSteps(0)}
      >
        Reset
      </button>
    </div>
  );
}