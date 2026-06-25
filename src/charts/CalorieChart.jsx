import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

const data = [
  { day: "Mon", calories: 2100 },
  { day: "Tue", calories: 2300 },
  { day: "Wed", calories: 2000 },
  { day: "Thu", calories: 2200 },
  { day: "Fri", calories: 1900 },
];

export default function CalorieChart() {
  return (
    <div className="chart-card">
      <h2>🔥 Calories Intake</h2>

      <ResponsiveContainer
        width="100%"
        height={300}
      >
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="day" />
          <YAxis />
          <Tooltip />

          <Bar
            dataKey="calories"
            fill="#3b82f6"
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}