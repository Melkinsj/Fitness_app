import { useState } from "react";

export default function WeightTracker() {
  const [weight, setWeight] = useState("");

  return (
    <div className="card">

      <h2>Weight Tracker</h2>

      <input
        type="number"
        value={weight}
        onChange={(e) =>
          setWeight(e.target.value)
        }
      />

      <button>Save Weight</button>

    </div>
  );
}