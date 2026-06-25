import WeightChart from "../charts/WeightChart";
import CalorieChart from "../charts/CalorieChart";
import SleepChart from "../charts/SleepChart";
import WaterChart from "../charts/WaterChart";
import "./Analytics.css";

export default function Analytics() {
  return (
    <div>
      <h1>📈 Analytics Dashboard</h1>

      <div className="charts-grid">
        <WeightChart />
        <CalorieChart />
        <SleepChart />
        <WaterChart />
      </div>
    </div>
  );
}