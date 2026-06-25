import { useState } from "react";

export default function WaterTracker() {

  const [water, setWater] = useState(0);

  return (
    <div className="card">

      <h2>Water Intake</h2>

      <h1>{water} L</h1>

      <button
        onClick={() =>
          setWater(water + 0.25)
        }
      >
        +250 ml
      </button>

    </div>
  );
}