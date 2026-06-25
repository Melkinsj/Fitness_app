import BMICalculator from "../fitness/BMICalculator";
import WeightTracker from "../fitness/WeightTracker";
import WaterTracker from "../fitness/WaterTracker";
import "./Fitness.css";

export default function FitnessTracker() {
  return (
    <div>
      <h1>Fitness Tracker</h1>

      <BMICalculator />

      <WeightTracker />

      <WaterTracker />
    </div>
  );
}