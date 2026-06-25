import "./ProgressBar.css";
export default function ProgressBar({
  current,
  goal,
}) {
  const percentage = Math.min(
    (current / goal) * 100,
    100
  );

  return (
    <div className="progress-container">
      <div className="progress-info">
        {current} / {goal}
      </div>

      <div className="progress-bar">
        <div
          className="progress-fill"
          style={{
            width: `${percentage}%`,
          }}
        />
      </div>
    </div>
  );
}