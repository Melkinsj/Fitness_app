import { useState } from "react";

export default function BMICalculator() {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");

  const bmi =
    height && weight
      ? (
          weight /
          ((height / 100) * (height / 100))
        ).toFixed(1)
      : "";

  const getCategory = () => {
    if (!bmi) return "";

    if (bmi < 18.5) return "Underweight";
    if (bmi < 25) return "Normal";
    if (bmi < 30) return "Overweight";

    return "Obese";
  };

  return (
    <div className="card">
      <h2>📊 BMI Calculator</h2>

      <input
        type="number"
        placeholder="Height (cm)"
        value={height}
        onChange={(e) => setHeight(e.target.value)}
      />

      <input
        type="number"
        placeholder="Weight (kg)"
        value={weight}
        onChange={(e) => setWeight(e.target.value)}
      />

      {bmi && (
        <>
          <h3>BMI: {bmi}</h3>
          <p>{getCategory()}</p>
        </>
      )}
    </div>
  );
}