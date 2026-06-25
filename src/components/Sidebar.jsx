import { Link } from "react-router-dom";
import "./Sidebar.css";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <h1 className="logo">💪</h1>

      <h2 className="logo-text">
        FitTrack Pro
      </h2>

      <nav>
        <Link to="/">Dashboard</Link>
        <Link to="/profile">Profile</Link>
        <Link to="/fitness">Fitness Tracker</Link>
        <Link to="/nutrition">Nutrition Planner</Link>
        <Link to="/analytics">Analytics</Link>
        <Link to="/goals">Goals</Link>
        <Link to="/settings">Settings</Link>
      </nav>
    </div>
  );
}