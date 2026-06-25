import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

const data = [
  { day: "Mon", sleep: 7 },
  { day: "Tue", sleep: 8 },
  { day: "Wed", sleep: 6 },
  { day: "Thu", sleep: 7.5 },
  { day: "Fri", sleep: 8 },
];

export default function SleepChart() {
  return (
    <div className="chart-card">
      <h2>😴 Sleep Analysis</h2>

      <ResponsiveContainer
        width="100%"
        height={300}
      >
        <AreaChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="day" />
          <YAxis />
          <Tooltip />

          <Area
            type="monotone"
            dataKey="sleep"
            fill="#60a5fa"
            stroke="#2563eb"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}