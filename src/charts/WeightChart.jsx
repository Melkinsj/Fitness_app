export default function WeeklyReport() {
  return (
    <div className="card">
      <h2>📊 Weekly Nutrition Report</h2>

      <div className="report-grid">

        <div className="report-box">
          <h3>Calories</h3>
          <p>14,500 kcal</p>
        </div>

        <div className="report-box">
          <h3>Protein</h3>
          <p>840 g</p>
        </div>

        <div className="report-box">
          <h3>Water Intake</h3>
          <p>18 L</p>
        </div>

        <div className="report-box">
          <h3>Meals Logged</h3>
          <p>28 Meals</p>
        </div>

      </div>
    </div>
  );
}