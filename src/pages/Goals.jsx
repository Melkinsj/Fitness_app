import ProgressBar from "../components/ProgressBar";

export default function Goals() {
  return (
    <div className="card">
      <h1>Goals</h1>

      <h3>Weight Goal</h3>

      <ProgressBar
        current={72}
        goal={65}
      />

      <h3>Water Goal</h3>

      <ProgressBar
        current={2.5}
        goal={3}
      />

      <h3>Daily Steps</h3>

      <ProgressBar
        current={8500}
        goal={10000}
      />
    </div>
  );
}