import { useState } from "react";

export default function Profile() {
  const [name, setName] = useState("");

  return (
    <div className="card">
      <h1>User Profile</h1>

      <input
        type="text"
        placeholder="Full Name"
        value={name}
        onChange={(e) =>
          setName(e.target.value)
        }
      />

      <input
        type="number"
        placeholder="Age"
      />

      <input
        type="number"
        placeholder="Height (cm)"
      />

      <input
        type="number"
        placeholder="Weight (kg)"
      />

      <button>Save Profile</button>
    </div>
  );
}