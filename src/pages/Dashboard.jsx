import Sidebar from "../components/Sidebar";
import StatCard from "../components/StatCard";
import Analytics from "./Analytics";
import ThemeToggle from "../components/ThemeToggle";
import "./Dashboard.css";
export default function Dashboard() {
  return (
    <div className="layout">

      <Sidebar />

      <div className="content">

        <h1>Fitness Dashboard</h1>

        <div className="cards">

          <StatCard
            title="Weight"
            value="72 kg"
            icon="⚖️"
          />

          <StatCard
            title="BMI"
            value="23.1"
            icon="📊"
          />

          <StatCard
            title="Calories"
            value="2100"
            icon="🔥"
          />

          <StatCard
            title="Water"
            value="2.5L"
            icon="💧"
          />

        </div>

      </div>

    </div>
  );
}